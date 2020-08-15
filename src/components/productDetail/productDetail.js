import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

export const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const thisProduct = products.find((item) => item.id === +productId);

  return (
    <div>
      <h1>
        {thisProduct.name} - ${thisProduct.price}
      </h1>
      <p>
        <img src={thisProduct.imageUrls[0]} alt={thisProduct.name} />
      </p>
      <p>{thisProduct.description}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductDetail);
