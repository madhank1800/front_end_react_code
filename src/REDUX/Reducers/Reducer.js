//import { actionTypes } from "../constants/ActionTypes";
import { actionTypes } from "../constants/ActionTypes";
export const initialState = {
  products: [],
};
export const mobileDetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.MOBILE_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state ;
  }
};
