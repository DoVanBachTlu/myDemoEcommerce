import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  distanceHorizontal,
  formatMoney,
  textSizeStyle,
  windowWidth,
} from "../../utils/Defined";
import { IconDelete, IconEdit } from "../../../assets/icons";

export default function ItemInCart() {
  const infoItem = [
    {
      label: "Type: ",
      info: "Size M",
    },
    {
      label: "Quantity: ",
      info: 1,
    },
  ];
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/08/20/10/39/leather-shoes-2661249_640.jpg",
        }}
        style={styles.imgItem}
      />
      <View style={{ flex: 1 }}>
        <Text numberOfLines={2} style={textSizeStyle.large}>
          ầksfasbjkdasd ạhd ádha odias od ầksfasbjkdasd ạhd ádha odias od ádha
          odias od
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
          <Text style={textSizeStyle.large}>{formatMoney(5000000)}</Text>
        </View>
        <View style={styles.wrapViewButtonEdit}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <IconEdit />
          </TouchableOpacity>
          <TouchableOpacity>
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
    paddingBottom: 20,
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
