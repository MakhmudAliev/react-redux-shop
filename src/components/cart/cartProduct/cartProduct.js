import React from "react";
import { removeFromCart } from "../../../redux/actions/orderActions";
import { connect } from "react-redux";

export const CartProduct = ({ id, name, price, amount, removeFromCart }) => {
  return (
    <div key={id} className={`mb-8 rounded border-solid border-gray-500`}>
      {name} - $ {price} - {amount}
      <button className="ml-4" onClick={() => removeFromCart(id)}>
        <i className="fas fa-times-circle"></i>
      </button>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartProduct);
