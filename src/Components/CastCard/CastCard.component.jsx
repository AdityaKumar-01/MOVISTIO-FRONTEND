import React,{useEffect, useState} from "react";

import axios from "axios";

import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Backdrop from "@mui/material/Backdrop";
import "./CastCard.styles.css";
import CastDetails from './../CastDetails/CastDetails.component';



const CastCard = ({ data }) => {
const [open, setOpen] = useState(false);
const [detail, setDetail] = useState();
const handleClose = () => {
  setOpen(false);
};
const handleToggle = () => {
  setOpen(!open);
};
  useEffect(() => {
    const getCastDetails = async () => {
      const options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${data.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
      };

      const castDetails = await axios.request(options);
      setDetail(castDetails.data);
    };

    getCastDetails();
  }, [data]);
  
  return data.profile_path ? (
    <div className="cast-card-container">
      <img
        className="cast-img"
        src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
        alt="img"
      />
      <span className="cast-detail-holder">
        <span>{data.name}</span>
        <span style={{ fontWeight: "bold", margin: "3%" }}>AS</span>
        <span>{data.character}</span>
      </span>
      <span class="genre-card-btn">
        <button onClick={handleToggle}>Know More</button> <ArrowRightIcon />
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          {detail ? (<CastDetails data={detail} handleClose={handleClose} />):null}
        </Backdrop>
      </span>
    </div>
  ) : null;
};

export default CastCard;
