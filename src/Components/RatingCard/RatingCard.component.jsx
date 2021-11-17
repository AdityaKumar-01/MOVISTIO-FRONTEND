import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RatingCard.component.css";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';



const RatingCard = ({ id, movieName, rating }) => {
    const [data,setdata]=useState(null);
    const url=`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}`
    const theme = useTheme();

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

    useEffect(()=>{
        axios
        .get(url)
        .then((data)=> setdata(data.data.results[0]))
    },[])

    return (
        <div>
            {data ? 
                <div className="main-container">
                    <div className="card-container1">
                        <div className="card-left-container1">
                            <img class="img-component" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                        </div>
                        <div className="card-right-container1">
                            <div className="movie-title-container">{data ? data.original_title:null}</div>
                            <div className="geners-container">{}</div>
                            <div className="rating-container">{rating}</div>
                        </div>
                    </div> 
                </div>
            :null}
        </div>
    );
  };
  
  export default RatingCard;
  