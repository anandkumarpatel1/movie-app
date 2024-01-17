import React from "react";
import "./MovieCard.scss";

const MovieCard = ({item}) => {
  return (
    <div className="MovieCard">
      <img
        src={item?.primaryImage?.url}
        alt={item?.originalTitleText?.text}
      />
      <p>{item?.originalTitleText?.text}</p>
    </div>
  );
};

export default MovieCard;
