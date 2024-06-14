import Account from "../../screens/Account";
import Cart from "../../screens/Cart";
import Detail from "../../screens/Detail";
import Home from "../../screens/Home";
import ProductDetail from "../../screens/ProductDetail";
import Search from "../../screens/Search";
import Splash from "../../screens/Splash";
import Dashboard from "../Drawer/DrawerContent";
import { ScreenName } from "./ScreenName";

export const Routers = {
  home: {
    name: ScreenName.home,
    component: Home,
  },
  drawer: {
    name: ScreenName.drawer,
    component: Dashboard,
  },
  detail: {
    name: ScreenName.detail,
    component: Detail,
  },
  account: {
    name: ScreenName.account,
    component: Account,
  },
  productDetail: {
    name: ScreenName.productDetail,
    component: ProductDetail,
  },
  search: {
    name: ScreenName.search,
    component: Search,
  },
  cart: {
    name: ScreenName.cart,
    component: Cart,
  },
  splash: {
    name: ScreenName.splash,
    component: Splash,
  },
};
