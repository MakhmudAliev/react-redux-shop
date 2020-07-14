import React from "react";
import { Provider } from "react-redux";
import Products from "./components/Products";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="text-3xl">Hello</div>
      <Products />
    </Provider>
  );
}

export default App;
