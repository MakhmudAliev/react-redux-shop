import React from "react";
import Search from "./search";
import CartButton from "./cartButton";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={`py-8 flex justify-between`}>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Link to="/cart">
          <CartButton />
        </Link>
      </div>
    </div>
  );
};

export default Header;
