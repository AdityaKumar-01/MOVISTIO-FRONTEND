import React, { useState } from "react";
import loginPic from "../../Assets/login.png";

import "./AuthForm.styles.css";
import LoginForm from './../LoginForm/LoginForm.component';
import SignUpForm from './../LoginForm/SignUpForm.component';

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = (val) => {
    if (isLogin !== val) setLogin(val);
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <div className="form-left-panel">
          <span className="form-toggle-option">
            <span
              onClick={() => toggleForm(true)}
              className={isLogin ? "selected-option" : ""}
            >
              Login
            </span>
            <span
              onClick={() => toggleForm(false)}
              className={!isLogin ? "selected-option" : ""}
            >
              Sign Up
            </span>
          </span>
          {isLogin ? (
           <LoginForm />
          ) : (
            <SignUpForm />
          )}
        </div>

        <span className="form-panel">
          <img src={loginPic} alt="img" />
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
