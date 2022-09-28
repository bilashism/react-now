import React from "react";
import "./Navbar.css";
import logo from "../../logo.svg";
const Navbar = () => {
  return (
    <nav className="navbar-section">
      <div className="navbar-container">
        <a href="/">
          <img className="nav-logo" src={logo} alt="logo" />
        </a>
        <ul className="nav-list">
          <li>
            <a href="/order">order</a>
          </li>
          <li>
            <a href="/order-review">order review</a>
          </li>
          <li>
            <a href="/inventory">inventory</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
