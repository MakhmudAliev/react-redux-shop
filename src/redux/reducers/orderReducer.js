import { ADD_TO_CART } from "../constants";

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      if (state.find((item) => item.id === payload.id)) {
        return [...state];
      } else {
        return [...state, payload];
      }
    default:
      return state;
  }
}
