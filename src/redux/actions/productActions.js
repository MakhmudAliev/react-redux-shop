import { FETCH_PRODUCTS } from "../constants/";

export const fetchProducts = () => (dispatch) => {
  fetch("http://localhost:5000/products")
    .then((res) => res.json())
    .then((products) => {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    });
};
