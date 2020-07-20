import React from "react";
import { connect } from "react-redux";
import CartProduct from "./cartProduct/cartProduct";

export const Cart = ({ products }) => {
  return (
    <div>
      <div className={`mt-4 mb-8 text-4xl text-gray-8 00`}>Cart</div>
      {products.length
        ? products.map(({ id, name, price, amount }) => (
            <CartProduct
              key={id}
              id={id}
              name={name}
              price={price}
              amount={amount}
            />
          ))
        : "Cart empty"}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.order,
  };
};

export default connect(mapStateToProps, {})(Cart);
