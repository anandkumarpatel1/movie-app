import React from "react";
import "./Upcoming.scss";
import MovieCard from "../Card/MovieCard";
import { FcNext } from "react-icons/fc";

const Upcoming = ({ upcoming, title }) => {
  return (
    <div className="upcomingWrapper">
      <div>
        <div>
          {title}
          <div>
            <FcNext />
            <FcNext />
            <FcNext />
          </div>
        </div>
        <div>
          {upcoming?.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
