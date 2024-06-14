import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
import { baseUrl, loginAdmin } from "../../connectors /APIDefined";
import {
  localStorageModule,
  localStorageName,
} from "../../modules/AsyncStorage";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/router/ScreenName";
export default function Splash() {
  const navigation = useNavigation();

  // const handleLoginAdmin = async () => {
  //   try {
  //     const existingToken = await localStorageModule.getItem(
  //       localStorageName.tokenAdmin
  //     );

  //     if (!existingToken) {
  //       const token = await loginAdmin("admin", "admin123");
  //       await localStorageModule.setItem(localStorageName.tokenAdmin, token);
  //       console.log("Login Token:", token);
  //     }

  //     navigation.reset({
  //       index: 0,
  //       routes: [{ name: ScreenName.home }],
  //     });
  //   } catch (error) {
  //     console.error("Error splash:", error);
  //     Alert.alert(
  //       "Can not open the app due to some problems. Please close the app and try again"
  //     );
  //   }
  // };
  useEffect(() => {
    // handleLoginAdmin();
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: ScreenName.home }],
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Splash</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
