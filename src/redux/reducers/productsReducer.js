import { FETCH_PRODUCTS } from "../constants";

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return [...state, ...payload];
    default:
      return state;
  }
}
