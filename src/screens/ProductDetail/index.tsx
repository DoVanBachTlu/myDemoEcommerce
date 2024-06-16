import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header/Header";
import {
  APIManagerAdmin,
  APIManagerByCustomToken,
  UrlAPIDefined,
  baseUriImage,
} from "../../connectors /APIDefined";
import { localStorageName } from "../../modules/AsyncStorage";
import { ScreenName } from "../../navigation/router/ScreenName";
import {
  distanceHorizontal,
  formatMoney,
  formatNumber,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";
import { addProductToCart } from "../../sliceRedux/cart";

export default function ProductDetail(props: any): React.ReactNode {
  const imgList = [
    { file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/m/b/mb02-gray-0.jpg" },
    { file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/w/b/wb04-blue-0.jpg" },
    {
      file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/m/t/mt07-gray_main_1.jpg",
    },
    { file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/m/b/mb02-gray-0.jpg" },
    { file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/w/b/wb04-blue-0.jpg" },
    {
      file: "/cache/3c33eb8efc28baf6ebcb9a8e89c1b781/m/t/mt07-gray_main_1.jpg",
    },
  ];
  const attributesEx = [
    {
      label: "S",
      value: 1,
    },
    {
      label: "M",
      value: 2,
    },
    {
      label: "L",
      value: 3,
    },
    {
      label: "XL",
      value: 4,
    },
  ];
  const { sku, itemInfoUpdate } = props.route.params;
  const [uriImgPreview, setUriImgPreview] = useState("");
  const [quantity, setQuantity] = useState(itemInfoUpdate?.qty || 1);
  const [productDetail, setProductDetail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAttr, setSelectedAttr] = useState([]);
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log("itemInfoUpdate", itemInfoUpdate);
  const getProductInfoBySku = async () => {
    try {
      setIsLoading(true);
      const info = await APIManagerAdmin.get(
        UrlAPIDefined.productInfoBySku + (itemInfoUpdate?.sku || sku)
      );
      const realData = info?.data;
      setIsLoading(false);
      setProductDetail(realData);
      setUriImgPreview(baseUriImage + realData?.media_gallery_entries[0]?.file);
      console.log("getProductInfoBySku", info);
    } catch (error) {
      console.log("getProductInfoBySku error", error);
    }
  };
  const getAttributesByProduct = async () => {
    try {
      const data = await APIManagerAdmin.get(
        UrlAPIDefined.attributesByProduct,
        {
          params: { searchCriteria: "a" },
        }
      );
      console.log("getAttributesByProduct", data);
    } catch (error) {
      console.log("getAttributesByProduct error", error);
    }
  };
  useEffect(() => {
    getProductInfoBySku();
    getAttributesByProduct();
  }, []);

  const quantityInStock = productDetail?.extension_attributes?.stock_item?.qty;
  const handleAddToCart = async () => {
    if (!isLoggedIn) {
      navigation.navigate(ScreenName.account);
      return;
    }
    if (quantityInStock === 0) {
      Alert.alert("out of stock");
      return;
    }
    if (selectedAttr.length === 0) {
      Alert.alert("must select size");
      return;
    }
    try {
      let idQuote = await AsyncStorage.getItem(localStorageName.idQuote);
      console.log("idQuote", idQuote);
      if (!idQuote) {
        const createIdQuote = await APIManagerByCustomToken.post(
          UrlAPIDefined.createNewCart
        );
        console.log("idQuote1", createIdQuote?.data);

        AsyncStorage.setItem(localStorageName.idQuote, createIdQuote?.data);
        idQuote = createIdQuote?.data;
      }
      dispatch(addProductToCart({ sku, quantity, idQuote }));
      getProductInfoBySku();
      Alert.alert("success");
    } catch (error) {
      console.log("handleAddToCart error", error);
      Alert.alert(error?.response.data?.message);
    }
  };
  const handleUpdateItemAddedToCart = async (
    cartId: string,
    itemId: number
  ) => {
    if (quantityInStock === 0) {
      Alert.alert("out of stock");
      return;
    }

    try {
      let idQuote = await AsyncStorage.getItem(localStorageName.idQuote);
      console.log("idQuote", idQuote);
      if (!idQuote) {
        const createIdQuote = await APIManagerByCustomToken.post(
          UrlAPIDefined.createNewCart
        );
        console.log("idQuote1", createIdQuote?.data);

        AsyncStorage.setItem(localStorageName.idQuote, createIdQuote?.data);
        idQuote = createIdQuote?.data;
      }
      const update = await APIManagerAdmin.put(
        `default/V1/carts/${cartId}/items/${itemId}`,
        {
          cartItem: {
            qty: quantity,
            quote_id: idQuote,
          },
        }
      );
      getProductInfoBySku();
      console.log("updateItemAddedToCart", update);
    } catch (error) {
      console.log("updateItemAddedToCart error", error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header pressGoBack headerTitle={"Chi tiết"} />
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={"black"} />
        </View>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image
              source={{
                uri: uriImgPreview,
              }}
              style={styles.imgPreview}
            />
            <Text
              style={[textSizeStyle.headerScreen, { marginLeft: 8 }]}
              numberOfLines={2}
            >
              {productDetail?.name}
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                ...(productDetail?.media_gallery_entries || []),
                ...imgList,
              ]}
              style={{
                marginVertical: 8,
                flex: 1,
              }}
              keyExtractor={(item, index) => `${item.file}_${index}`}
              renderItem={({ item, index }) => {
                console.log("uriImg", item?.file);
                return (
                  <TouchableOpacity
                    onPress={() => setUriImgPreview(baseUriImage + item?.file)}
                  >
                    <Image
                      source={{ uri: baseUriImage + item?.file }}
                      style={styles.imgSmall}
                    />
                  </TouchableOpacity>
                );
              }}
            />
            <View style={{ marginLeft: distanceHorizontal }}>
              <Text style={textSizeStyle.headerScreen}>
                {formatMoney(productDetail?.price)}
              </Text>
              <Text style={textSizeStyle.headerScreen}>
                {formatNumber(quantityInStock || 0)} left
              </Text>
            </View>
            <View style={styles.wrapViewAttr}>
              {attributesEx.map((item: any) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itemAttr,
                      {
                        borderColor:
                          item?.value === selectedAttr?.value ? "red" : "black",
                      },
                    ]}
                    onPress={() => setSelectedAttr(item)}
                  >
                    <Text style={textSizeStyle.headerScreen}>{item.label}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.wrapViewQuantity}>
              <TouchableOpacity
                onPress={() => {
                  if (quantity === 1) return;
                  setQuantity(quantity - 1);
                }}
              >
                <Text style={styles.txtQuantity}>-</Text>
              </TouchableOpacity>
              <View style={{ marginHorizontal: 20 }}>
                <Text style={styles.txtQuantity}>{quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (quantity === quantityInStock) {
                    Alert.alert(
                      `The quantity cannot be greater than ${
                        quantityInStock || 0
                      } `
                    );
                    return;
                  }
                  setQuantity(quantity + 1);
                }}
              >
                <Text style={styles.txtQuantity}>+</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {itemInfoUpdate ? (
            <TouchableOpacity
              style={styles.btnAddToCart}
              onPress={() =>
                handleUpdateItemAddedToCart(
                  itemInfoUpdate?.quote_id,
                  itemInfoUpdate?.item_id
                )
              }
            >
              <Text style={textSizeStyle.headerScreen}>Update</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.btnAddToCart}
              onPress={() => handleAddToCart()}
            >
              <Text style={textSizeStyle.headerScreen}>Add to cart</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  imgPreview: {
    width: windowWidth,
    height: 220,
    backgroundColor: "#0000004D",
    resizeMode: "contain",
    marginBottom: 10,
  },
  btnAddToCart: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 9,
    paddingVertical: 10,
    marginHorizontal: distanceHorizontal,
    marginBottom: 10,
  },
  imgSmall: {
    width: 80,
    height: 80,
    backgroundColor: "#0000004D",
    resizeMode: "contain",
    marginRight: 10,
  },
  wrapViewQuantity: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  txtQuantity: {
    fontSize: 25,
    fontWeight: "bold",
  },
  wrapViewAttr: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: distanceHorizontal,
    marginTop: 15,
    flexWrap: "wrap",
  },
  itemAttr: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 3,
    borderWidth: 1,
  },
});
