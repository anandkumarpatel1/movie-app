import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import "./Main.scss";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";
import Home from "./Pages/Home";
import NextHeader from "./Components/NextHeader/NextHeader";

function App() {
  const [upcoming, setUpcoming] = useState();
  const [upcomingMovies, setUpcomingMovies] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // fetchData
  const fetchData = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/x/upcoming`,
        headers: {
          "X-RapidAPI-Key":
            "6d36d4d2e8msh540baa9312641e8p122089jsna02c2fa677bb",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      const { data } = await axios.request(options);
      setUpcoming(data?.results);
      fetchUpcomingMovies()
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchUpcomingMovies = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
        params: {
          titleType: 'movie',
          genre: 'Drama'
        },
        headers: {
          'X-RapidAPI-Key': '6d36d4d2e8msh540baa9312641e8p122089jsna02c2fa677bb',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
      

      const { data } = await axios.request(options);
      setUpcomingMovies(data?.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          <Header />
          <NextHeader />
          <div className="dot blue"></div>
          <div className="dot black"></div>
          <div className="dot black sec"></div>
          <Home upcoming={upcoming} upcomingMovies={upcomingMovies}/>
        </>
      )}
    </>
  );
}

export default App;
