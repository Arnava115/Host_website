import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/contact"> HOME</Link>
        <Link to="/"> SHOP</Link>
        <Link to="/cart">
          <ShoppingCart className="cart-symbol" size={30} />
        </Link>
      </div>
    </div>
  );
};
