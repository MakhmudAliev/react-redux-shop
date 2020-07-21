import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddToCart from "./addToCart/addToCart";

export const Product = ({ id, name, price, description, imageUrls, order }) => {
  const [amountInOrder, setAmountInOrder] = useState(0);

  useEffect(() => {
    const itemInOrder = order.find((item) => item.id === id);
    if (itemInOrder !== undefined) {
      setAmountInOrder(itemInOrder["amount"]);
    }
  }, [order, id, amountInOrder]);

  return (
    <div
      className={`flex flex-col justify-between rounded shadow text-center  mb-8 mr-4 w-10/24 sm:w-3/10 md:w-3/10 lg:w-22/100 px-6 py-4`}
    >
      <div className={`mb-8`}>
        <img src={imageUrls[0]} alt={name} />
      </div>
      <div>
        <div className={`mb-4`}>
          <a
            href="#"
            className={`text-red-800 hover:text-red-700 hover:underline`}
          >
            {name}
          </a>
        </div>
        <div
          className={`flex sm:flex-wrap lg:flex-no-wrap items-center justify-center mb-4`}
        >
          <div className={`mr-4 sm:w-full sm:mb-2`}>$ {price}</div>
          {amountInOrder ? (
            <div>in Cart: {amountInOrder}</div>
          ) : (
            <AddToCart
              id={id}
              name={name}
              price={price}
              descriptio={description}
              imageUrls={imageUrls}
            />
          )}
        </div>
        <div className={`hidden lg:block text-gray-700 text-sm`}>
          {description}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

export default connect(mapStateToProps)(Product);
