import React, { useMemo } from "react";
import { connect } from "react-redux";
import CartProduct from "./cartProduct/cartProduct";

export const Cart = ({ products }) => {
  const total = useMemo(
    () => products.reduce((acc, item) => item.price * item.amount + acc, 0),
    [products]
  );

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

      {products.length && (
        <div>
          <strong>Total</strong>: $ {Math.round(total * 100) / 100}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.order,
  };
};

export default connect(mapStateToProps, {})(Cart);
