import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  IconBack,
  IconCart,
  IconOpenMenu,
  IconSearch,
} from "../../../../assets/icons";
import { distanceHorizontal, textSizeStyle } from "../../../utils/Defined";
import { ScreenName } from "../../../navigation/router/ScreenName";

interface Props {
  headerTitle?: string;
  containerStyle?: any;
  pressGoBack?: boolean;
  hideCartIcon?: boolean;
}
export default function Header(props: Props): React.ReactNode {
  const navigation = useNavigation();
  const handleGoBack = () => {
    if (props.pressGoBack) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: ScreenName.home }],
        })
      );
    } else {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.pressGoBack ? (
        <TouchableOpacity onPress={handleGoBack}>
          <IconBack />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <IconOpenMenu />
        </TouchableOpacity>
      )}
      <Text style={[textSizeStyle.headerScreen]}>{props.headerTitle}</Text>

      <View style={styles.wrapRightHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenName.search)}
          style={{ marginRight: 10 }}
        >
          <IconSearch />
        </TouchableOpacity>
        {props.hideCartIcon ? null : (
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenName.cart)}
          >
            <IconCart />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: distanceHorizontal,
    paddingVertical: distanceHorizontal / 2,
  },
  wrapRightHeader: {
    flexDirection: "row",
    marginRight: 10,
  },
});
