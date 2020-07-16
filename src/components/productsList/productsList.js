import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import Product from "../product/product";

const ProductsList = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <div className={`mt-4 mb-8 text-4xl text-gray-8 00`}>Products</div>
      <div className={`flex flex-wrap mt-8`}>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrls={product.imageUrls}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);
