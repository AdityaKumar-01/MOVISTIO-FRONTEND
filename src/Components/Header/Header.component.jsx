import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../Assets/logo.png"
import "./Header.styles.css";
const Header = () => {
    return (
      <div className="header-wrapper">
        <span className="header-logo">
          <Link to={"/"}><img src={logo} alt = "logo" className="logo"/></Link>
        </span>
        <span className="header-buttons">
          <Link to={"/"} className="header-links">
            HOME
          </Link>
          <a href="#movies" className="header-links">
            MOVIES
          </a>
          <a href="#genre" className="header-links">
            GENRES
          </a>
        </span>
      </div>
    );
}

export default Header
