import {
  CommonActions,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  IconBack,
  IconCart,
  IconOpenMenu,
  IconSearch,
} from "../../../../assets/icons";
import { distanceHorizontal, textSizeStyle } from "../../../utils/Defined";
import { ScreenName } from "../../../navigation/router/ScreenName";
import { useSelector } from "react-redux";

interface Props {
  headerTitle?: string;
  containerStyle?: any;
  pressGoBack?: boolean;
  hideCartIcon?: boolean;
}
export default function Header(props: Props): React.ReactNode {
  const isLoggedIn = useSelector((state) => state.customer.isLoggedIn);
  const numberOfItemsInCart = useSelector(
    (state) => state?.cart?.numberOfItemsInCart
  );
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
  console.log("numberOfItemsInCart", numberOfItemsInCart);

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
            onPress={() => {
              if (isLoggedIn) {
                navigation.navigate(ScreenName.cart);
              } else {
                navigation.navigate(ScreenName.account);
              }
            }}
          >
            {isLoggedIn && numberOfItemsInCart > 0 ? (
              <View style={styles.numberItemsInCart}>
                <Text style={{ color: "red", fontWeight: "bold" }}>
                  {numberOfItemsInCart}
                </Text>
              </View>
            ) : null}

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
  numberItemsInCart: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 9999,
    top: -10,
    right: -10,
  },
});
