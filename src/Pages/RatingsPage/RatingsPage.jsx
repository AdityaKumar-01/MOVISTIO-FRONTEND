import React, { useState, useEffect } from "react";

import axios from "axios";
import Header from "../../Components/Header/Header.component";
import RatingCard from './../../Components/RatingCard/RatingCard.component';
import "./RatingsPage.styles.css"
const RatingsPage = () => {
    const [data, setData] = useState(null);
  
    const getRatingDetails = () => {
      var options = {
        method: "GET",
        url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/get-rating/${localStorage.getItem("username")}`,
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
              {data ? (
                  data.reverse().map(obj => {return (
                    <RatingCard movieName={obj.movieName} rating={obj.rating} />
                  );})
              ):("null")} 
            </div>
           
        </div>   
    )
}

export default RatingsPage
