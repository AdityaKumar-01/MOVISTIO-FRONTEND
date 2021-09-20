import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviesPage.styles.css";
import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";
import EventIcon from "@material-ui/icons/Event";

const MoviesPage = () => {
  let { id } = useParams();

  const [data, currentData] = useState();
  const [cast, setCast] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    };

    axios
      .request(options)
      .then((res) => {
        console.log(res);
        currentData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <Header />
      {data ? (
        <div className="movies-page-header">
          <div className="movies-page-backdrop">
            <img
              className="backdrop-img"
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              alt="img"
            />
            <span className="backdrop-details">
              <span className="backdrop-title">{data.title}</span>
              <span className="backdrop-desc">{data.overview}</span>
              <span className="genres-card-holder">
                {data.genres.map((obj) => {
                  return <span className="genres-card">{obj.name}</span>;
                })}
              </span>
              <span className="backdrop-metdata">
                <EventIcon />
                <p className="backdrop-p">{data.release_date.split("-")[0]}</p>
                <CircularProgressbar
                  className="prog-bar"
                  value={data.vote_average}
                  maxValue={10}
                  minValue={0}
                  text={data.vote_average}
                  styles={buildStyles({
                    pathColor: "#FFE142",
                    textColor: "#FFE142",
                    trailColor: "#a4a4a4",
                  })}
                />
              </span>
            </span>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default MoviesPage;
