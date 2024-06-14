import { combineReducers } from "redux";
import customerSlice from "./customer";
const rootReducer = combineReducers({
  customer: customerSlice,
});
export default rootReducer;
