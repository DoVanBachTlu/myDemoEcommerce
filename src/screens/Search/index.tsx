import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { distanceHorizontal, windowWidth } from "../../utils/Defined";
import { IconBack, IconClearTxtInput } from "../../../assets/icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { APIManagerAdmin, searchProduct } from "../../connectors /APIDefined";
export default function Search(): React.ReactNode {
  const navigation = useNavigation();
  const [querySearch, setQuerySearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (querySearch.trim().length > 0) {
        searchProducts(querySearch);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [querySearch]);
  const searchProducts = async (query: string) => {
    try {
      const response = await searchProduct("name", query, "like");

      console.log("search result", response?.data);
      return response.data;
    } catch (error) {
      console.log("search result error", error);
    }
  };
  const handleSearch = () => {
    if (querySearch.trim().length > 0) {
      searchProducts(querySearch);
    }
  };
  useEffect(() => {
    searchProducts("aaaa");
  }, []);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack />
        </TouchableOpacity>
        <View style={styles.wrapViewTxtInput}>
          <TextInput
            placeholder="Name product"
            style={styles.txtInput}
            placeholderTextColor={"black"}
            value={querySearch}
            onChangeText={(text: string) => setQuerySearch(text)}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity
            style={{ padding: 5 }}
            onPress={() => setQuerySearch("")}
          >
            <IconClearTxtInput />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtInput: {
    height: 40,
    flex: 1,
  },
  wrapViewTxtInput: {
    marginHorizontal: distanceHorizontal,
    flexDirection: "row",
    paddingVertical: 8,
    borderRadius: 9,
    paddingLeft: 10,
    marginTop: 5,
    alignItems: "center",
    borderWidth: 1,
  },
});
