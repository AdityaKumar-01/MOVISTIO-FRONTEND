import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import "./CastCard.styles.css";
const CastCard = ({ data }) => {
  return data.profile_path ? (
    <div className="cast-card-container">
      <img
        className="cast-img"
        src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
        alt="img"
      />
      <span className="cast-detail-holder">
        <span>{data.name}</span>
        <span style={{ fontWeight: "bold", margin: "3%" }}>AS</span>
        <span>{data.character}</span>
      </span>
      <span class="genre-card-btn">
        <a href="/">Know More</a> <ArrowRightIcon />
      </span>
    </div>
  ) : (
    null
  );
};

export default CastCard;
