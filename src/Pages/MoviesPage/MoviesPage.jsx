import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import axios from "axios";

import EventIcon from "@material-ui/icons/Event";

import Header from "./../../Components/Header/Header.component";
import Footer from "./../../Components/Footer/Footer.component";
import CastCard from "./../../Components/CastCard/CastCard.component";
import RcmdCard from "./../../Components/RcmdCard/RcmdCard.component";
import LoaderPage from "./../LoaderPage/LoaderPage";

import "./MoviesPage.styles.css";
import ReviewCard from "./../../Components/ReviewCard/ReviewCard.component";
import StarsRating from "stars-rating";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MoviesPage = () => {
  let { name } = useParams();
  const [data, currentData] = useState();
  const [cast, setCast] = useState([]);
  const [rcmd, setRcmd] = useState([]);
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState([]);
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
    const getMovieData = async () => {
      const option = {
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${name}`,
      };
      const movie = await axios.request(option);
      currentData(movie.data.results[0]);
      let gens = [];
      movie.data.results[0].genre_ids.forEach((id) => gens.push(ids[id]));
      let info = {
        genres: gens,
        id: movie.data.results[0].id,
      };

      return {
        status: 200,
        data: info,
      };
    };

    const getCastData = async (id) => {
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
        url: `${process.env.REACT_APP_FLASK_SERVER}/getRecommendations`,
        data: { cast: cast, movie: data },
      };
      const recommendations = await axios.request(option);
      setRcmd(recommendations.data.data);
      return {
        status: 200,
      };
    };
    const getReviews = async (id) => {
      var option = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      };
      const reviews = await axios.request(option);
      // console.log(reviews.data.results)
      const reviewList = [];
      reviews.data.results.forEach((obj) => reviewList.push(obj.content));
      console.log(reviewList);
      return {
        status: 200,
        data: reviewList,
      };
    };

    const getFilterReviews = async (data) => {
      const option = {
        method: "POST",
        url: `${process.env.REACT_APP_FLASK_SERVER}/filterReviews`,
        data: data,
      };
      const reviews = await axios.request(option);
      setReviews(reviews.data.data);
      return {
        status: 200,
        data: reviews.data,
      };
    };
    const getData = async () => {
      let movieStatus = await getMovieData();

      let castStatus = await getCastData(movieStatus.data.id);
      let rcmdStatus = await getRecommendations(
        movieStatus.data.genres,
        castStatus.data
      );
      let reviewStatus = await getReviews(movieStatus.data.id);
      let filterReviews = await getFilterReviews(reviewStatus.data);
      setLoader(false);
    };

    getData();
  }, [name]);

  const ratingChanged = (newRating) => {
    const options = {
      method: "POST",
      url: `${process.env.REACT_APP_EXPRESS_SERVER}/api/post-rating`,
      data: {
        username: localStorage.getItem("username"),
        ratings: [{ movieName: data.title, rating: newRating }],
      },
    };
    axios.request(options).then((data) => {
      console.log(data);
      handleClick();
    });
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {loader ? (
        <LoaderPage />
      ) : (
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
                    {data.genre_ids.map((obj, key) => {
                      return <span className="genres-card">{ids[obj]}</span>;
                    })}
                  </span>
                  <span className="backdrop-metdata">
                    <EventIcon />
                    <p className="backdrop-p">
                      {data.release_date.split("-")[0]}
                    </p>
                    <CircularProgressbar
                      className="prog-bar"
                      value={data.vote_average / 2}
                      maxValue={5}
                      minValue={0}
                      text={data.vote_average / 2}
                      styles={buildStyles({
                        pathColor: "#FFE142",
                        textColor: "#FFE142",
                        trailColor: "#a4a4a4",
                      })}
                    />
                  </span>
                  <StarsRating
                    count={5}
                    onChange={ratingChanged}
                    size={35}
                    color2={"#ffe142"}
                  />
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Rating posted in your history!
                    </Alert>
                  </Snackbar>
                </span>
              </div>
            </div>
          ) : null}
          <div className="cast-card-title">
            {data ? `Cast in ${data.title}` : null}
          </div>
          <div className="cast-card-wrapper">
            {cast
              ? cast.map((obj, key) => {
                  return <CastCard key={key} data={obj} />;
                })
              : null}
          </div>
          <div className="cast-card-title">Recommendations for you</div>
          <div
            className="genres-cards"
            style={{ padding: "5%", "justify-content": "space-around" }}
          >
            {rcmd
              ? rcmd.map((obj, key) => {
                  return <RcmdCard key={key} name={obj[0]} />;
                })
              : null}
          </div>
          {reviews
            ? reviews.map((review) => {
                return <ReviewCard str={review[0]} status={review[1]} />;
              })
            : null}
          <Footer />
        </div>
      )}
    </>
  );
};

export default MoviesPage;
