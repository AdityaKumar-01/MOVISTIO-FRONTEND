import React from "react";
import "./CastDetails.styles.css";
const CastDetails = ({ data, handleClose }) => {
  return (
    <div className="CastDetails-container">
      <div className="cast-detail-body">
        <div className="CastDetails-left-panel">
          <img
            className="cast-detail-img"
            src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
            alt="img"
          />
        </div>
        <div className="cast-detail-right-panel">
          <span className="cast-detail-header">{data.name}</span>
          <span className="cast-detail-pallete">
            <span className="cast-detail-chip">Biography: </span>
            <p>
              {data.biography.length > 100
                ? data.biography.split(" ").slice(0, 50).join(" ")
                : data.biography}
            </p>
          </span>
          <span className="cast-detail-pallete">
            <span className="cast-detail-chip">Birthday: </span>
            <p>{data.birthday}</p>
          </span>
          <span className="cast-detail-pallete">
            <span className="cast-detail-chip">Place of birth: </span>
            <p>{data.place_of_birth}</p>
          </span>
          <span className="cast-detail-pallete">
            <span className="cast-detail-chip">Known For: </span>
            <p>{data.known_for_department}</p>
          </span>
          <span className="cast-detail-btn">
            <button onClick={ () => handleClose()}>Close</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CastDetails;
