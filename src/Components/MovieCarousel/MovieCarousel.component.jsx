import React from "react";
import EventIcon from "@material-ui/icons/Event";
import { Slide } from "pure-react-carousel";

import "./MovieCarousel.styles.css";
const MovieCarousel = ({ data }) => {
  
  const mapIdToName = (id) => {
    const genList = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Science Fiction",
      10770: "TV Movie",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    return(genList[id]);
  };
  return (
    <Slide>
      <div className="movie-carousel-card">
        <span className="movie-img-container">
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="img"
          />
        </span>
        <span className="detail-holder">
          <span>{mapIdToName(data.genre_ids[0])}</span>|
          <span>
            <EventIcon />
            {data.release_date.split("-")[0]}
          </span>
        </span>
      </div>
    </Slide>
  );
};

export default MovieCarousel;
