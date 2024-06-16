import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import ItemInCart from "../../components/elements/ItemInCart";
import {
  APIManagerByCustomToken,
  UrlAPIDefined,
} from "../../connectors /APIDefined";
import { distanceHorizontal, textSizeStyle } from "../../utils/Defined";
import { useDispatch, useSelector } from "react-redux";
import { getListItemsInCart } from "../../sliceRedux/cart";

export default function Cart() {
  const [listItemsInCart, setListItemsInCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const numberOfItemsInCart = useSelector(
    (state) => state?.cart?.numberOfItemsInCart
  );
  const dispatch = useDispatch();

  const lisPrdsInCart = async () => {
    try {
      setIsLoading(true);
      const listItems = await dispatch(getListItemsInCart());
      setIsLoading(false);
      setListItemsInCart(listItems?.payload);
      console.log("listItems", listItems);
    } catch (error) {
      console.log("listItems error", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    lisPrdsInCart();
  }, [numberOfItemsInCart]);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"Cart"} hideCartIcon pressGoBack />
      {isLoading ? (
        <View style={styles.centerScreen}>
          <ActivityIndicator size="large" color={"black"} />
        </View>
      ) : listItemsInCart?.length > 0 ? (
        <View style={styles.viewList}>
          <FlatList
            style={{ flex: 1 }}
            data={listItemsInCart}
            renderItem={({ item, index }) => {
              console.log("item--->", item);
              return (
                <ItemInCart
                  itemInfo={item}
                  key={index}
                  lastItem={
                    index === listItemsInCart?.length - 1 ? true : false
                  }
                />
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.centerScreen}>
          <Text style={textSizeStyle.headerScreen}>Empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewList: {
    flex: 1,
    marginHorizontal: distanceHorizontal,
  },
  centerScreen: { flex: 1, alignItems: "center", justifyContent: "center" },
});
