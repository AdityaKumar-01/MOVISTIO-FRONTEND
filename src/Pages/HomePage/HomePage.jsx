import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../Components/Header/Header.component";
import Carousel from "./../../Components/Carousel/Carousel.component";
import MovieCarousel from "./../../Components/MovieCarousel/MovieCarousel.component";

import "./HomePage.styles.css";
import Footer from "./../../Components/Footer/Footer.component";

const HomePage = () => {
  const [MovieData, setMovieData] = useState([]);
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
    var options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    };
    axios
      .request(options)
      .then((details) => {
        setMovieData(details.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [MovieData]);
  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-carousel-container">
        <Carousel />
      </div>
      <div className="homepage-movies" id="movies">
        <div className="homepage-title">Popular Movies</div>
        <div className="homepage-desc">
          Here are some of the most popular movies that our users & viewers
          enjoy.
        </div>
        <div className="movie-carousel">
          {MovieData ? (
            <CarouselProvider
              visibleSlides={3}
              step={3}
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={20}
              interval={7000}
              isPlaying={true}
              infinite={true}
            >
              <Slider>
                {MovieData.map((obj) => {
                  return <MovieCarousel data={obj} />;
                })}
              </Slider>
            </CarouselProvider>
          ) : null}
        </div>
      </div>
      <div className="homepage-genres" id="genres">
        <div className="homepage-title">Search by Genres</div>
        <div className="homepage-desc">
          Here are some of the most popular movies that our users & viewers
          enjoy.
        </div>
        <div class="genre-option" id="genre-option">
          {Object.keys(ids).map((key, index) => {
            return (
              <a class="genre-btn" href={`genres/${key}/${ids[key]}`}>
                {ids[key]}
              </a>
            );
          })}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
