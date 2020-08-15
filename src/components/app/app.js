import React from "react";
import ProductsList from "../productsList";
import Header from "../header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../cart/cart";
import ProductDetail from "../productDetail";

function App() {
  return (
    <Router>
      <div className={`container mx-auto px-4`}>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <ProductsList />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
