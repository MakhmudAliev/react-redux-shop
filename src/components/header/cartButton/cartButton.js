import React from "react";
import { connect } from "react-redux";

export const CartButton = ({ amount }) => {
  return (
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
      <i className="fas fa-shopping-cart mr-4"></i>
      Your Cart ({amount})
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.order.length,
  };
};

export default connect(mapStateToProps, {})(CartButton);
