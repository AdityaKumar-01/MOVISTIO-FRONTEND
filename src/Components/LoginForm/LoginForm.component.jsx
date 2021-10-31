import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import loginPic from "../../Assets/login.png";
import "./LoginForm.styles.css"
const LoginForm = () => {
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
            <div className="form-inputs">
              <span>UserName</span>
              <input type="text" placeholder="Enter Username" />
              <span>Password</span>
              <input type="password" placeholder="Enter Password" />
              <button>
                <p>Login</p>
                <LoginIcon />
              </button>
            </div>
          ) : (
            <div className="form-inputs">
              <span>UserName</span>
              <input type="text" placeholder="Enter Username" />
              <span>Password</span>
              <input type="password" placeholder="Enter Password" />
              <span>Confirm Password</span>
              <input type="password" placeholder="Enter Password Again" />
              <button>
                <p>Sign Up</p>
                <LoginIcon />
              </button>
            </div>
          )}
        </div>

        <span className="form-panel">
          <img src={loginPic} alt="img" />
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
