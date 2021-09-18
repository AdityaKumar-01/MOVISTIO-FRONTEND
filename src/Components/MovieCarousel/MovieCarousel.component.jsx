import React from 'react'


import { Slide } from "pure-react-carousel";

import "./MovieCarousel.styles.css";
const MovieCarousel = ({data}) => {
    // console.log(data);
    return (
      <Slide>
        <div className="movie-carousel-card">
          {data.title} {data.release_date.split("-")[0]}
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt="img"
          />
        </div>
      </Slide>
    );
}

export default MovieCarousel
