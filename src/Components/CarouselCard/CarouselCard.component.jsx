import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CarouselCard.styles.css";
const CarouselCard = ({id}) => {

    const [data, setData] = useState(null);
    const getDetails = () =>{
        var options = {
          method: "GET",
          url: `https://api.themoviedb.org/3/movie/${id}?api_key=fc671a9683da1e18060546d03e4e88bd`,
        };
        axios
          .request(options)
          .then(function (response) {
            setData(response.data);
            console.log(response.data);
            
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    useEffect(() =>{
       getDetails();
    },[])
    return (
      <Slide>
        {data ? (<div className="card-container">
          <div className="card-left-container">
            <div className="card-metadata">
              <span>{data.original_language}</span>
              <span>{data.release_date}</span>
              <span>{data.vote_average}/10</span>
              {/* <span>EN</span>
              <span>1995-09-12</span>
              <span>12/10</span> */}
            </div>
            <div className="card-title">{data.original_title}</div>
            <div className="card-desc">
              {data.tagline}
            </div>
          </div>
          <div className="card-right-container">
            <div className="card-img">
              <img
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt="img"
              />
              {/* <img
                src="https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
                alt="img"
              /> */}
            </div>
            <div className="card-genre">{data.genres[0].name}</div>
          </div>
        </div>):"null"}
      </Slide>
    );
}

export default CarouselCard
