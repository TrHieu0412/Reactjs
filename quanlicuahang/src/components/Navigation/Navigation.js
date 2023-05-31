import React from "react";
import { RxAvatar } from "react-icons/rx";
import "./Navigation.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="nav-item">
        <div className="nav-account">
          <div className="nav-ava">
            <RxAvatar />
          </div>
          <div className="nav-name">
            <h5>Admin account</h5>
            <p> Quản trị viên</p>
          </div>
        </div>
        <div className="nav-page">
          <Link classname="todo-all" to="/HomePage">
            Home Page
          </Link>
          <Link classname="todo-active" to="/AboutPage">
            About Page
          </Link>
          <Link classname="todo-active" to="/InformationPage">
            Information Page
          </Link>
          <Link classname="todo-all" to="/details/${1}">
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
