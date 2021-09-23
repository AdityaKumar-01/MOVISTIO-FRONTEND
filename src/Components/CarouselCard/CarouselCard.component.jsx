import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import SearchIcon from "@material-ui/icons/Search";
import TranslateIcon from "@material-ui/icons/Translate";
import EventIcon from "@material-ui/icons/Event";
import StarsIcon from "@material-ui/icons/Stars";
import "./CarouselCard.styles.css";
const CarouselCard = ({ id }) => {
  const [data, setData] = useState(null);
  const getDetails = () => {
    var options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=fc671a9683da1e18060546d03e4e88bd`,
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <Slide>
      {data ? (
        <div className="card-container">
          <div className="card-left-container">
            <div className="card-metadata">
              <span>
                <TranslateIcon />
                <p className="meta-p">{data.original_language}</p>
              </span>
              <span>
                <EventIcon />
                <p className="meta-p">{data.release_date.split("-")[0]}</p>
              </span>
              <span>
                <StarsIcon />
                <p className="meta-p">{data.vote_average}/10</p>
              </span>
            </div>
            <div className="card-title">{data.original_title}</div>
            <div className="card-desc">{data.tagline}</div>
            <div className="card-btn">
              <a href={`/movies/${id}`}>
                <SearchIcon className="know-icon" />
                KNOW MORE{" "}
              </a>
            </div>
          </div>
          <div className="card-right-container">
            <div className="card-img">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt="img"
              />
            </div>
            <div className="card-genre">{data.genres[1].name}</div>
          </div>
        </div>
      ) : (
        "null"
      )}
    </Slide>
  );
};

export default CarouselCard;
