import React from "react";
import "../styles/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar({ OpenSidebar, welcome_message = "", username = "Ella" }) {
  return (
    <div className="navbar">
      <div className="nav-container">
        <RxHamburgerMenu onClick={OpenSidebar} className="toggle-button" />
        <h2 className="nav-welcome">
          <span>Welcome to EasyPay, {username}</span>
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
