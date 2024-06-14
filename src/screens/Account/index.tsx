import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import { StyleSheet } from "react-native";
import TxtInput from "../../components/common/TextInput";
import { distanceHorizontal } from "../../utils/Defined";
import { textSizeStyle } from "../../utils/Defined";
import {
  createCustomer,
  loginCustomer,
  logoutCustomer,
} from "../../connectors /APIDefined";
import { useSelector } from "react-redux";
export default function Account(): React.ReactNode {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMode, setSignUpMode] = useState(false);
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  const handleLogin = async () => {
    try {
      if (email?.trim().length === 0 || password.trim().length == 0) {
        Alert.alert("email and password cannot be empty");
        return;
      }
      await loginCustomer(email, password);
    } catch (error) {
      console.log("handleLogin error", error);
    }
  };
  const createNewCustomer = async () => {
    try {
      if (email?.trim().length === 0 || password.trim().length == 0) {
        Alert.alert("email and password cannot be empty");
        return;
      }
      const customerData = {
        firstName: "John",
        lastName: "Doe",
        email: email,
        password: password,
      };

      const newCustomer = await createCustomer(customerData);
      if (newCustomer) {
        await loginCustomer(email, password);
      }
      console.log("New Customer:", newCustomer);
    } catch (error) {
      console.log("New customer error", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Header headerTitle={"Account"} />
        {isLoggedIn ? (
          <View style={styles.viewLoggedIn}>
            <TouchableOpacity style={styles.btnLogOut} onPress={logoutCustomer}>
              <Text style={textSizeStyle.headerScreen}>Log out</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.wrapViewTxtInput}>
            <TxtInput
              placeHolder={"Email"}
              value={email}
              setValue={(text: string) => setEmail(text)}
            />
            <TxtInput
              rightIcon
              placeHolder={"Password"}
              isPassword
              value={password}
              setValue={(text: string) => setPassword(text)}
            />

            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => {
                if (signUpMode) {
                  createNewCustomer();
                } else {
                  handleLogin();
                }
              }}
            >
              <Text style={textSizeStyle.headerScreen}>
                {signUpMode ? "Sign up" : "Login"}
              </Text>
            </TouchableOpacity>
            {signUpMode ? null : (
              <TouchableOpacity
                style={styles.btnCreateAccount}
                onPress={() => setSignUpMode(true)}
              >
                <Text style={styles.txtCreateAccount}>Create new account</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapViewTxtInput: {
    marginHorizontal: distanceHorizontal * 2,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  txtCreateAccount: {
    ...textSizeStyle.title,
    textAlign: "center",
  },
  btnLogin: {
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  btnCreateAccount: {
    marginTop: 8,
  },
  viewLoggedIn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnLogOut: {
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
