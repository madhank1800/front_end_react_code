import { combineReducers } from "redux";
import { mobileDetailsReducer } from "../Reducers/Reducer"; 

const Reducer = combineReducers({
  mobileDeatailsOfReducer: mobileDetailsReducer,
});

export default Reducer;
