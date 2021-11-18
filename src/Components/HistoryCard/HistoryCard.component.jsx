import React, { useState, useEffect } from "react";
import axios from "axios";



import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const HistoryCard = ({ id, movieName, at }) => {
  const [data, setdata] = useState(null);

  const [ids, setIds] = useState({
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
  });

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}`,
    };
    axios.request(options).then((data) => {
      setdata(data.data.results[0]);
      console.log(data.data.results[0]);
    });
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      {data ? (
        <div className="rating-card">
          <div className="rating-card-left">
            <img
              class="rating-card-img"
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt="img"
            />
          </div>
          <div className="rating-card-right">
            <div className="rating-card-title">{data.original_title}</div>
            <span>
              <span style={{ fontWeight: "bold", margin: "0 3px" }}>at</span>{" "}
              {at.split(" ")[1]}{" "}
              <span style={{ fontWeight: "bold", margin: "0 3px" }}>on</span>{" "}
              {at.split(" ")[0]}
            </span>
            <div className="genres-container">
              {data
                ? data.genre_ids.map((id) => {
                    return <span className="rating-genre-chip">{ids[id]}</span>;
                  })
                : null}
            </div>
            <span className="genre-card-btn">
              <a href={`/movies/${data.original_title}`}>Know More </a>
              <ArrowRightIcon />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HistoryCard;
