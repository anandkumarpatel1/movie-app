import React from "react";
import Upcoming from "../Components/Upcoming/Upcoming";
import "../Main.scss";

const Home = ({ upcoming, upcomingMovies }) => {
  return (
    <div className="Home">
      <Upcoming upcoming={upcoming} title='Upcoming' />
      <Upcoming upcoming={upcomingMovies} title='Upcoming Drama Movies' />
    </div>
  );
};

export default Home;
