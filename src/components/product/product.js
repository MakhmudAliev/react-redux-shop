import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/orderActions";

export const Product = ({
  id,
  name,
  price,
  description,
  imageUrls,
  addToCart,
}) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

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
          <div className={`mr-2 hidden sm:block`}>
            <input
              className={`py-2 px-2 w-10 text-center rounded border`}
              type="text"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div>
            <button
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
              onClick={() =>
                addToCart({ id, name, price, description, imageUrls, amount })
              }
            >
              Buy
            </button>
          </div>
        </div>
        <div className={`hidden lg:block text-gray-700 text-sm`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
