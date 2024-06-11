import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/common/Header/Header";
export default function ProductDetail(): React.ReactNode {
  return (
    <SafeAreaView>
      <Header pressGoBack headerTitle={"Chi tiết"} />
    </SafeAreaView>
  );
}
