import React, { useState, useEffect } from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";import TranslateIcon from "@material-ui/icons/Translate";
import EventIcon from "@material-ui/icons/Event";
import StarsIcon from "@material-ui/icons/Stars";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import axios from "axios";

const RcmdCard = ({ name }) => {
  const [data, setData] = useState();
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
    const option = {
      method: "GET",
      url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=
              ${name}`,
    };
    axios
      .request(option)
      .then((response) => {console.log(response);
        setData(response.data.results[0])})
      .catch((error) => console.log(error));

  }, []);
  return (
    <div>
      {data && data.poster_path ? (
        <div
          className="genre-card-container"
          style={{ "margin-bottom": "20px" }}
        >
          <span className="genre-card-img">
            <img
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              alt="img"
            />
          </span>
          <span className="genre-card-data">
            <span className="genre-card-meta">
              <LocalMoviesIcon color={"black"} />{" "}
              <p className="genre-card-p">{ids[data.genre_ids[0]]}</p>
            </span>
            <span className="genre-card-meta">
              <EventIcon color={"black"} />{" "}
              <p className="genre-card-p">{data.release_date.split("-")[0]}</p>
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
      ) : null}
    </div>
  );
};

export default RcmdCard;
