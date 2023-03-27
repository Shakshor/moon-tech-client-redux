import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import productReducers from "./reducers/productReducers";

const store = createStore(productReducers, composeWithDevTools());

export default store;
