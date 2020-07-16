import React from "react";
import Search from "./search";
import Cart from "./cart";

export const Header = () => {
  return (
    <div className={`py-8 flex justify-between`}>
      <div>Logo</div>
      <div>
        <Search />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default Header;
