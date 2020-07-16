import React from "react";
import ProductsList from "../productsList";
import Header from "../header";

function App() {
  return (
    <div className={`container mx-auto px-4`}>
      <Header />
      <hr />
      <ProductsList />
    </div>
  );
}

export default App;
