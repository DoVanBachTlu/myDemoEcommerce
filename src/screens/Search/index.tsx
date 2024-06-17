import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  distanceHorizontal,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";
import { IconBack, IconClearTxtInput } from "../../../assets/icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import {
  APIManagerAdmin,
  UrlAPIDefined,
  searchProduct,
} from "../../connectors /APIDefined";
import ItemProduct from "../../components/elements/ItemProduct";
export default function Search(): React.ReactNode {
  const navigation = useNavigation();
  const [querySearch, setQuerySearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [listProducts, setListProducts] = useState([]);
  const lengthQuerySearch = querySearch.trim().length;
  useEffect(() => {
    const timer = setTimeout(() => {
      if (lengthQuerySearch > 0) {
        searchProducts(querySearch);
      }
    }, 2000);
    if (lengthQuerySearch === 0) {
      setListProducts([]);
    }
    return () => clearTimeout(timer);
  }, [querySearch]);

  const searchProducts = async (query: string) => {
    try {
      setLoading(true);
      const response = await APIManagerAdmin.get(UrlAPIDefined.listProducts, {
        params: { searchCriteria: query },
      });
      setLoading(false);
      setListProducts(response?.data?.items);
      console.log("searchProducts==>", response);
    } catch (error) {
      console.log("searchProducts==>error", error);
    }
  };
  const handleSearch = () => {
    if (lengthQuerySearch > 0) {
      searchProducts(querySearch);
    }
  };

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
        {loading ? (
          <View style={styles.centerScreen}>
            <ActivityIndicator size="large" color={"black"} />
          </View>
        ) : listProducts && listProducts?.length > 0 ? (
          <FlatList
            style={{
              flex: 1,
              marginHorizontal: distanceHorizontal,
              marginVertical: distanceHorizontal,
            }}
            data={listProducts}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            numColumns={2}
            renderItem={({ item, index }) => {
              console.log("item--->", item);
              return <ItemProduct productInfo={item} key={index} />;
            }}
            keyExtractor={(item) => item?.id}
          />
        ) : (
          <View style={styles.centerScreen}>
            <Text style={textSizeStyle.headerScreen}>empty</Text>
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
export const styles = StyleSheet.create({
  centerScreen: { flex: 1, alignItems: "center", justifyContent: "center" },
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
