import Account from "../../screens/Account";
import Detail from "../../screens/Detail";
import Home from "../../screens/Home";
import ProductDetail from "../../screens/ProductDetail";
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
};
