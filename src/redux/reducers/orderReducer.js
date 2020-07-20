import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";
import { getCartData, setCartData } from "../../utils";

const initialState = getCartData() || [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART: {
      console.log("add");

      let itemExists = false;
      const newState = state.slice();

      newState.forEach((item) => {
        if (item.id === payload.id) {
          item.amount = +item.amount + +payload.amount;
          itemExists = true;
        }
      });

      if (!itemExists) {
        newState.push(payload);
      }

      return setCartData(newState);
    }

    case REMOVE_FROM_CART: {
      return setCartData(state.filter((item) => item.id !== payload));
    }

    default:
      return state;
  }
}
