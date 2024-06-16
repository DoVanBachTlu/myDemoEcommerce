import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenName } from "../../navigation/router/ScreenName";
import {
  distanceHorizontal,
  formatMoney,
  formatNumber,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";
import { baseUriImage } from "../../connectors /APIDefined";

interface Props {
  productInfo?: object;
  containerStyle?: any;
}
const distanceBetweenItems = 20;
const widthItem =
  (windowWidth - distanceHorizontal * 2 - distanceBetweenItems) / 2;
const ratio = 60 / 90;
export default function ItemProduct(props: Props): React.ReactNode {
  const navigation = useNavigation();
  const handleOnPressItem = () => {
    navigation.navigate(ScreenName.productDetail, {
      sku: props?.productInfo?.sku,
    });
  };
  return (
    <TouchableOpacity
      style={[styles.container, props.containerStyle]}
      onPress={handleOnPressItem}
    >
      <Image
        source={{
          uri:
            baseUriImage + props?.productInfo?.media_gallery_entries[0]?.file,
        }}
        style={styles.imgProduct}
      />
      <Text numberOfLines={2} style={styles.productName}>
        {props.productInfo?.name}
      </Text>
      <View style={{ marginVertical: 5 }}>
        <Text numberOfLines={1} style={styles.numberSold}>
          {`${formatNumber(150000)} left`}
        </Text>
      </View>
      <View style={styles.wrapViewPrice}>
        <Text style={styles.priceNotDiscount}>
          {formatMoney(props?.productInfo?.price)}
        </Text>
        <Text style={styles.realPrice}>
          {formatMoney(props?.productInfo?.price)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: widthItem,
    marginBottom: 50,
  },
  wrapRightHeader: {
    flexDirection: "row",
    marginRight: 10,
  },
  imgProduct: {
    width: "100%",
    height: widthItem * (1 / ratio),
    marginBottom: 5,
  },
  productName: {
    ...textSizeStyle.large,
    textAlign: "center",
    fontWeight: "bold",
  },
  numberSold: {
    ...textSizeStyle.normal,
    textAlign: "right",
    color: "grey",
  },
  wrapViewPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  realPrice: {
    color: "red",
  },
  priceNotDiscount: {
    textDecorationLine: "line-through",
  },
});
