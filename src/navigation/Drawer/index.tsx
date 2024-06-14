import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import BottomTabNavigator from "../BottomTab";
import { Routers } from "../router";
import { ScreenName } from "../router/ScreenName";
import Dashboard from "./DrawerContent";
const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenName.splash}
      drawerContent={(props) => <Dashboard {...props} />}
    >
      <Drawer.Screen
        name={ScreenName.splash}
        component={Routers.splash.component}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.home}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.detail}
        component={Routers.detail.component}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.productDetail}
        component={Routers.productDetail.component}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.search}
        component={Routers.search.component}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={ScreenName.cart}
        component={Routers.cart.component}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
