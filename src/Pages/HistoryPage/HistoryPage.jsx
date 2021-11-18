import React, { useState, useEffect } from "react";

import axios from "axios";
import Header from "../../Components/Header/Header.component";

import HistoryCard from './../../Components/HistoryCard/HistoryCard.component';
const HistoryPage = () => {
  const [data, setData] = useState(null);

  const getRatingDetails = () => {
    var options = {
      method: "GET",
      url: `${
        process.env.REACT_APP_EXPRESS_SERVER
      }/api/get-history/${localStorage.getItem("username")}`,
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getRatingDetails();
  }, []);
  return (
    <div>
      <Header />
      <div className="rating-page-container">
        {data
          ? data.reverse().map((obj) => {
              return (
                <HistoryCard movieName={obj.movieName} at={obj.at} />
              );
            })
          : "null"}
      </div>
    </div>
  );
};

export default HistoryPage;
