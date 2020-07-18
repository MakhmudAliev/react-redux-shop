import React from "react";
import ProductsList from "../productsList";
import Header from "../header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../cart/cart";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
