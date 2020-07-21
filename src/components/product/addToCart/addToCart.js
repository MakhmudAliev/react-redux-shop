import React, { useState } from "react";
import { addToCart } from "../../../redux/actions/orderActions";
import { connect } from "react-redux";

export const AddToCart = ({
  id,
  name,
  price,
  description,
  imageUrls,
  addToCart,
}) => {
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    if (Number.isInteger(+e.target.value)) {
      setAmount(e.target.value);
    } else {
      return;
    }
  };

  return (
    <>
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
    </>
  );
};

export default connect(null, { addToCart })(AddToCart);
