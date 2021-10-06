import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
const LoginForm = () => {
  const [isLogin, setLogin] = useState(true);

  const toggleForm = (val) => {
    if (isLogin !== val) setLogin(val);
  };
  return (
    <div className="form-container">
      <div>
        <span></span>
        <div>
          <span>
            <span onClick={() => toggleForm(true)}>Login</span>
            <span onClick={() => toggleForm(false)}>Sign Up</span>
          </span>
          {isLogin ? (
            <div>
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
            <div>
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
      </div>
    </div>
  );
};

export default LoginForm;
