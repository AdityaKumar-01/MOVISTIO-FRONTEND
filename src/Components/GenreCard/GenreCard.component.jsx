import React from "react";

import TranslateIcon from "@material-ui/icons/Translate";
import EventIcon from "@material-ui/icons/Event";
import StarsIcon from "@material-ui/icons/Stars";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./GenreCard.styles.css";

const GenreCard = ({ data }) => {
  
  return (
    <div className="genre-card-container">
      <span className="genre-card-img">
        <img
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          alt="img"
        />
      </span>
      <span className="genre-card-data">
        <span className="genre-card-meta">
          <TranslateIcon color={"black"} />{" "}
          <p className="genre-card-p">{data.original_language}</p>
        </span>
        <span className="genre-card-meta">
          <EventIcon color={"black"} />{" "}
          {data.release_date ? (
            <p className="genre-card-p">{data.release_date.split("-")[0]}</p>
          ) : (
           null
          )}
        </span>
        <span className="genre-card-meta">
          <StarsIcon color={"black"} />{" "}
          <p className="genre-card-p">{data.vote_average}/10</p>
        </span>
      </span>
      <span className="genre-card-btn">
        <a href={`/movies/${data.title}`}>Know More </a>
        <ArrowRightIcon />
      </span>
    </div>
  );
};

export default GenreCard;
