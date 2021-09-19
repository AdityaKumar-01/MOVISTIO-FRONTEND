import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {Link } from "react-router-dom"
import axios from "axios";

import Header from "../../Components/Header/Header.component";
import Carousel from "./../../Components/Carousel/Carousel.component";
import MovieCarousel from "./../../Components/MovieCarousel/MovieCarousel.component";

import "./HomePage.styles.css";
import Footer from './../../Components/Footer/Footer.component';

const HomePage = () => {
  const [MovieData, setMovieData] = useState([]);

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
            <Link class="genre-btn" to="genres/28" href="#genres">
              action
            </Link>
          
            <Link class="genre-btn" to="genres/12" href="#genres">
              adventure
            </Link>
          
            <Link class="genre-btn" to="genres/16" href="#genres">
              animation
            </Link>
          
            <Link class="genre-btn" to="genres/35" href="#genres">
              comedy
            </Link>
          
            <Link class="genre-btn" to="genres/80" href="#genres">
              crime
            </Link>
          
            <Link class="genre-btn" to="genres/99" href="#genres">
              documentary
            </Link>
          
            <Link class="genre-btn" to="genres/18" href="#genres">
              drama
            </Link>
          
            <Link class="genre-btn" to="genres/10751" href="#genres">
              family
            </Link>
          
            <Link class="genre-btn" to="genres/14" href="#genres">
              fantasy
            </Link>
          
            <Link class="genre-btn" to="genres/36" href="#genres">
              history
            </Link>
          
            <Link class="genre-btn" to="genres/27" href="#genres">
              horror
            </Link>
          
            <Link class="genre-btn" to="genres/10402" href="#genres">
              music
            </Link>
          
            <Link class="genre-btn" to="genres/9648" href="#genres">
              mystery
            </Link>
          
            <Link class="genre-btn" to="genres/10749" href="#genres">
              romance
            </Link>
          
            <Link class="genre-btn" to="genres/878" href="#genres">
              sci-fi
            </Link>
          
            <Link class="genre-btn" to="genres/10770" href="#genres">
              tv movie
            </Link>
          
            <Link class="genre-btn" to="genres/53" href="#genres">
              thriller
            </Link>
          
            <Link class="genre-btn" to="genres/10752" href="#genres">
              war
            </Link>
          
            <Link class="genre-btn" to="genres/37" href="#genres">
              western
            </Link>
          
        </div>
      </div>
    <Footer/>
    </div>

  );
};

export default HomePage;
