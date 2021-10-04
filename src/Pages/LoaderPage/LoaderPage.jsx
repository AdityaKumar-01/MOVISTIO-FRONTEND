import React from "react";

import "./LoaderPage.css";

const LoaderPage = () => {
  return (
    <div className="loader-page">
      <div className="psoload">
        <div className="straight"></div>
        <div className="curve"></div>
        <div className="center"></div>
        <div className="inner"></div>
      </div>
      <p className="loader-p">Getting best for you</p>
    </div>
  );
};

export default LoaderPage;
