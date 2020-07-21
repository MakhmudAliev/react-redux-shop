import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_CART_AMOUNT,
} from "../constants/";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const changeCartAmount = (item) => {
  return {
    type: CHANGE_CART_AMOUNT,
    payload: item,
  };
};
