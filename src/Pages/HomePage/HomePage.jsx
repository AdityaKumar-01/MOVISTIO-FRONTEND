import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import axios from "axios";

import Header from "../../Components/Header/Header.component";
import Carousel from "./../../Components/Carousel/Carousel.component";

import "./HomePage.styles.css";
import MovieCarousel from './../../Components/MovieCarousel/MovieCarousel.component';

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    };
    axios.request(options)
    .then((details) => {
      setData(details.data.results)
    }).catch(err =>{
      console.log(err);
    });
  }, [data]);
  return (
    <div className="homepage-container">
      <Header />
      <div className="homepage-carousel-container">
        <Carousel />
      </div>
      <div className="homepage-movies" id="movies">
        <span className="homepage-title">Popular Movies</span>
        <span>
          Here are some of the most popular movies that our users & viewers
          enjoy.
        </span>
        <div className="movie-carousel">
          {data ? (
            <CarouselProvider
              visibleSlides={3}
              step={3}
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={25}
              interval={5000}
              isPlaying={true}
              infinite={true}
            >
              <Slider>
                {data.map((obj) => {
                  return <MovieCarousel data={obj} />;
                })}
              </Slider>
            </CarouselProvider>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
