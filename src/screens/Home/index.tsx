import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import ItemProduct from "../../components/elements/ItemProduct";
import { APIManager, UrlAPIDefined } from "../../connectors /APIDefined";
import { distanceHorizontal, textSizeStyle } from "../../utils/Defined";

export default function Home(): React.ReactNode {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getListProducts = async () => {
    try {
      setLoading(true);
      const response = await APIManager.get(UrlAPIDefined.listProducts, {
        params: { searchCriteria: 2 },
      });
      setLoading(false);
      setListProducts(response?.data?.items);
      console.log("getListProducts==>", response);
    } catch (error) {
      console.log("getListProducts==>error", error);
    }
  };
  useEffect(() => {
    getListProducts();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header headerTitle={"Home"} />
      {loading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      ) : (
        <FlatList
          style={{ flex: 1, marginHorizontal: distanceHorizontal }}
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
      )}
    </SafeAreaView>
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
