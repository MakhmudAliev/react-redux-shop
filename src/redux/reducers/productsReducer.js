import { FETCH_PRODUCTS } from "../constants";

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}
