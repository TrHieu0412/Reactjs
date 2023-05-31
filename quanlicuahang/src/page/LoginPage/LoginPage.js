import React, { useState } from "react";
import "./LoginPage.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";

// const checkLogin = () =>
//   if
const LoginPage = () => {
  const adminAccount = {
    userName: "trunghieu",
    passWord: "trunghieu",
    rePassWord: "trunghieu",
    email: "trhieu412@gmail.com",
  };
  const [account, setAccount] = useState({
    userName: "",
    passWord: "",
    rePassWord: "",
    email: "",
  });
  const checkAccount = (event) => {
    const { value, name } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };
  const onCheckSubmit = (event) => {
    event.preventDefault();
    if (
      account.userName === adminAccount.userName &&
      account.passWord === adminAccount.passWord &&
      account.rePassWord === adminAccount.rePassWord &&
      account.email === adminAccount.email
    ) {
      // Redirect to HomePage or perform any desired action
      alert("Login successful");
      window.location.href = "/HomePage";
    } else {
      alert("Please check your information again");
    }
  };
  return (
    <div className="login">
      <div className="login-form">
        <div className="login-form-left">
          <div className="login-left-title">Login</div>
          <div className="login-main">
            {" "}
            <form
              className="row g-3 needs-validation add-people-form"
              onSubmit={onCheckSubmit}
            >
              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Username"
                  value={account.userName}
                  onChange={checkAccount}
                  name="userName"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>

              <div className="form">
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Password"
                  value={account.passWord}
                  onChange={checkAccount}
                  name="passWord"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form">
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Re-password"
                  value={account.rePassWord}
                  onChange={checkAccount}
                  name="rePassWord"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Email"
                  value={account.email}
                  onChange={checkAccount}
                  name="email"
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <p>Or</p>
              <div className="icon">
                <FaFacebookSquare />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
              </div>
              <button class="login-now" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <div className="login-form-right">
          <div className="icon-right">
            <FaDiscord />
          </div>
          <h2>Welcome to the ManagerPage</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h6>Copyright © 2023. All rights reserved by TrungHius</h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
