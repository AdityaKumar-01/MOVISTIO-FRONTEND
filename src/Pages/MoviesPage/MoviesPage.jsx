import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./MoviesPage.styles.css";
import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";
import EventIcon from "@material-ui/icons/Event";
import CastCard from "./../../Components/CastCard/CastCard.component";
import RcmdCard from './../../Components/RcmdCard/RcmdCard.component';

const MoviesPage = () => {
  let { id } = useParams();
  const [data, currentData] = useState();
  const [cast, setCast] = useState([]);
  const [rcmd, setRcmd] = useState([]);
  useEffect(() => {
    const getMovieData = async () => {
      const option = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      };
      const movie = await axios.request(option);
      currentData(movie.data);
      return {
        status: 200,
        data: movie.data.genres,
      };
    };

    const getCastData = async () => {
      const option = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`,
      };
      const cast = await axios.request(option);
      setCast(cast.data.cast.slice(0, 11));

      return {
        status: 200,
        data: cast.data.cast.slice(0, 11),
      };
    };

    const getRecommendations = async (data, cast) => {
      const option = {
        method: "POST",
        url: "http://localhost:5000/getRecommendations",
        data: { cast: cast, movie: data },
      };
      const recommendations = await axios.request(option);
      setRcmd(recommendations.data.data);
      return {
        status: 200
      };
    };

    const getData = async () => {
      let movieStatus = await getMovieData();
      let castStatus = await getCastData();
      let rcmdStatus = await getRecommendations(
        movieStatus.data,
        castStatus.data
      );
     
    };
    getData();
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
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
                {data.genres.map((obj, key) => {
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
      <div className="cast-card-title">
        {data ? `Cast in ${data.title}` : null}
      </div>
      <div className="cast-card-wrapper">
        {cast
          ? cast.map((obj) => {
              return <CastCard data={obj} />;
            })
          : null}
      </div>
      <div className="cast-card-title">
        Recommendations for you
      </div>
      <div
        className="genres-cards"
        style={{ padding: "5%", "justify-content": "space-around" }}
      >
        {rcmd
          ? rcmd.map((obj) => {
              return <RcmdCard name={obj[0]} />;
            })
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default MoviesPage;
