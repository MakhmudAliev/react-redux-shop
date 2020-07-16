import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  products: productsReducer,
  order: orderReducer
});
