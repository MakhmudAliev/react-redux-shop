import { ADD_TO_CART } from "../constants";

const storeKey = "THIS_STORE_ORDER2";

// Получаем данные из LocalStorage
const getCartData = () => {
  return JSON.parse(localStorage.getItem(storeKey));
};
// Записываем данные в LocalStorage
const setCartData = (data) => {
  localStorage.setItem(storeKey, JSON.stringify(data));
  return data;
};

const initialState = getCartData() || [];

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      if (state.find((item) => item.id === payload.id)) {
        const newState = state.slice();

        newState.forEach((item) => {
          if (item.id === payload.id) {
            item.amount = +item.amount + +payload.amount;
          }
        });

        return setCartData(newState);
      } else {
        return setCartData([...state, payload]);
      }
    default:
      return state;
  }
}
