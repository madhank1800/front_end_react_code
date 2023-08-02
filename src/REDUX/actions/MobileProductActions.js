import { actionTypes } from "../constants/ActionTypes";

export const mobileProducts = (products) => {
    console.log("products:", products);
    return {
        type: actionTypes.MOBILE_PRODUCTS,
        payload:products
    }
}