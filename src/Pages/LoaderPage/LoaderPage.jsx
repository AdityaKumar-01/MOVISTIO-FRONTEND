import React from "react";
import "./LoaderPage.css";
const LoaderPage = () => {
  return (
    <div className="loader-page">
      <div class="psoload">
        <div class="straight"></div>
        <div class="curve"></div>
        <div class="center"></div>
        <div class="inner"></div>
      </div>
      <p className="loader-p">Getting best for you</p>
    </div>
  );
};

export default LoaderPage;
