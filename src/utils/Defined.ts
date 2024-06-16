import { StyleSheet, Dimensions } from "react-native";
export const distanceHorizontal = 16;
export const textSizeStyle = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  normal: {
    fontSize: 14,
  },
  large: {
    fontSize: 16,
  },
  biggest: {
    fontSize: 20,
  },
  headerScreen: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
export const formatMoney = (amount: number): string => {
  return amount?.toLocaleString("vi-VN") + " VND";
};
export const formatNumber = (value: number): string => {
  if (value == null || isNaN(value)) {
    return "0";
  }
  if (value <= 999) {
    return value.toString();
  } else if (value >= 1000 && value <= 9999) {
    return (value / 1000).toFixed(1).replace(".0", "") + "K";
  } else if (value >= 10000 && value <= 99999) {
    return (value / 1000).toFixed(1).replace(".0", "") + "K";
  } else if (value >= 100000 && value <= 999999) {
    return Math.round(value / 1000) + "k";
  } else if (value >= 1000000 && value <= 9999999) {
    return (value / 1000000).toFixed(1).replace(".0", "") + "M";
  }
  return value.toString();
};
