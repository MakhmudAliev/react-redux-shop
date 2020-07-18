import React from "react";
import { connect } from "react-redux";

export const Cart = ({ products }) => {
  return (
    <div>
      <div className={`mt-4 mb-8 text-4xl text-gray-8 00`}>Cart</div>
      {products.map((product) => (
        <div
          className={`mb-8 rounded border-solid border-gray-500`}
          key={product.id}
        >
          {product.name} - $ {product.price} - {product.amount || 1}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.order,
  };
};

export default connect(mapStateToProps, {})(Cart);
