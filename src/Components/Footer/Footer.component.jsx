import React from 'react'
import {Link} from "react-router-dom";

import "./Footer.styles.css";

import credits from "../../Assets/credits.svg"


const Footer = () => {
    return (
      <div className="footer-container">
        <img src={credits} alt="credits"/>
        <a href="https://github.com/AdityaKumar-01/MOVISTIO-FRONTEND">
          Source Code
        </a>
      </div>
    );
}

export default Footer
