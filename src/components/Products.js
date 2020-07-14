import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";

const Products = ({ prods, fetchProducts }) => {
  useEffect(() => {
    console.log("1");
    fetchProducts();
    console.log("from react", prods);
    // eslint-disable-next-line
  }, [fetchProducts]);

  return (
    <div>
      qwe
      {/* {prods.map((name, id) => (
        <div key={id}>{name}</div>
      ))} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    prods: state.products.products,
  };
};

export default connect(mapStateToProps, { fetchProducts })(Products);
