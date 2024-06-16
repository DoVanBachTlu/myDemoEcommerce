import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  distanceHorizontal,
  formatMoney,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";
import { IconDelete, IconEdit } from "../../../assets/icons";
import {
  APIManagerAdmin,
  APIManagerByCustomToken,
} from "../../connectors /APIDefined";
import { useDispatch } from "react-redux";
import { getListItemsInCart } from "../../sliceRedux/cart";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/router/ScreenName";

interface Props {
  itemInfo?: object;
  containerStyle?: any;
  lastItem?: boolean;
}
export default function ItemInCart(props: Props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const infoItem = [
    {
      label: "Type: ",
      info: "Size M",
    },
    {
      label: "Quantity: ",
      info: props.itemInfo?.qty,
    },
  ];
  const deleteItemInCart = async (cartId: string, itemId: number) => {
    try {
      const deleteItem = await APIManagerAdmin.delete(
        `default/V1/carts/${cartId}/items/${itemId}`
      );
      Alert.alert("delete succes");
      await dispatch(getListItemsInCart());
      console.log("deleteItemInCart", deleteItem);
    } catch (error) {
      console.log("deleteItemInCart error", error);
    }
  };
  console.log("itemInfo--->", props.itemInfo);
  const navigateToUpdate = () => {
    navigation.navigate(ScreenName.productDetail, {
      itemInfoUpdate: props?.itemInfo,
    });
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          paddingBottom: props.lastItem ? 0 : 20,
          borderBottomWidth: props.lastItem ? 0 : 1,
        },
      ]}
      onPress={() => {
        navigation.navigate(ScreenName.productDetail, {
          sku: props?.itemInfo?.sku,
        });
      }}
    >
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_640.jpg",
        }}
        style={styles.imgItem}
      />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={textSizeStyle.large}>
          {props.itemInfo?.name}
        </Text>
        <View style={{ flex: 1 }} />
        <View>
          {infoItem?.map((item, index) => {
            return (
              <View style={{ flexDirection: "row" }} key={index}>
                <Text>{item?.label}</Text>
                <Text>{item?.info}</Text>
              </View>
            );
          })}
        </View>
        <View style={{ flex: 1 }} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={textSizeStyle.large}>Total</Text>
          <Text style={textSizeStyle.large}>
            {formatMoney(props.itemInfo?.qty * props.itemInfo?.price)}
          </Text>
        </View>
        <View style={styles.wrapViewButtonEdit}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => navigateToUpdate()}
          >
            <IconEdit />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              deleteItemInCart(
                props?.itemInfo?.quote_id,
                props?.itemInfo?.item_id
              );
            }}
          >
            <IconDelete />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 100,
    marginBottom: 30,
  },
  imgItem: {
    resizeMode: "contain",
    backgroundColor: "#0000004D",
    height: 150,
    width: 105,
    marginRight: 10,
  },
  wrapViewButtonEdit: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingVertical: 5,
  },
});
