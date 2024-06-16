import { combineReducers } from "redux";
import customerSlice from "./customer";
import cartSlice from "./cart";
const rootReducer = combineReducers({
  customer: customerSlice,
  cart: cartSlice,
});
export default rootReducer;
