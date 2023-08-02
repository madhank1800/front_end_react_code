import Reducer from "../Reducers/CombineReducers";
//import { Reducer } from "react";
import { createStore } from "redux";
const store = createStore(
  Reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
