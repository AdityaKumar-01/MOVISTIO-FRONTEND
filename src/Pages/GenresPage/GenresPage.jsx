import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import GenreCard from "./../../Components/GenreCard/GenreCard.component";
import Header from './../../Components/Header/Header.component';
import Footer from './../../Components/Footer/Footer.component';
import "./GenresPage.styles.css"
const GenresPage = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();
  let {name} = useParams();
  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=
      ${id}`,
    };

    axios
      .request(options)
      .then((data) => {
        // console.log(data.data);
        setData(data.data.results);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div className="genres-page-container">
      <Header />
      <div className="genres-page-title">{name}</div>
      <div className="genres-cards">
        {data
          ? data.map((obj) => {
              return <GenreCard data={obj}/>;
            })
          : null}
      </div>
      <Footer />
    </div>
  );
};

export default GenresPage;
