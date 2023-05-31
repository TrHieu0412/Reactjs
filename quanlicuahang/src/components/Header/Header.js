import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const logOut = () => {
    window.location.href = "/";
  };
  return (
    <div className="Header">
      <div className="main">ManagerPage</div>
      <div className="logo">
        <p>Hello, Trung Hiếu</p>
        <button className="logo-img" onClick={logOut}>
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Header;
