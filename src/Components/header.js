import React from "react";
import cart from "../images/cart.png";
import { Link, withRouter } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">kapray</Link>
      </h1>

      <Link to="/cart">
        <img src={cart} alt="cart" />
      </Link>
      <ul>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(Header);
