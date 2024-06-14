import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
import ItemInCart from "../../components/elements/ItemInCart";

export default function Cart() {
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle={"Cart"} hideCartIcon pressGoBack />
      <ItemInCart />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
