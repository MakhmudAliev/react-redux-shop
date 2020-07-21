import React from "react";
import {
  removeFromCart,
  changeCartAmount,
} from "../../../redux/actions/orderActions";
import { connect } from "react-redux";

export const CartProduct = ({
  id,
  name,
  price,
  amount,
  removeFromCart,
  changeCartAmount,
}) => {
  const handleChange = (e) => {
    if (Number.isInteger(+e.target.value)) {
      changeCartAmount({ id, amount: e.target.value });
    } else {
      return;
    }
  };

  return (
    <div key={id} className={`mb-8 rounded border-solid border-gray-500`}>
      {name} - $ {price} *
      <input
        type="text"
        className={`w-8 text-center border mx-2`}
        value={amount}
        onChange={handleChange}
      />
      = $ {Math.round(price * amount * 100) / 100}
      <button className="ml-4" onClick={() => removeFromCart(id)}>
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default connect(null, { removeFromCart, changeCartAmount })(CartProduct);
