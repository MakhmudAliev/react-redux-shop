const storeKey = "THIS_STORE_ORDER";

/**
 * get data from local storage
 */
export const getCartData = () => {
  return JSON.parse(localStorage.getItem(storeKey));
};

/**
 * set data to local storage
 */

export const setCartData = (data) => {
  localStorage.setItem(storeKey, JSON.stringify(data));
  return data;
};
