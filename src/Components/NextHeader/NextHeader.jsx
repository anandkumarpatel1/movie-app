import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NextHeader.scss";

const NextHeader = () => {
  const [genres, setGenres] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchGeners();
  }, []);

  const fetchGeners = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
        headers: {
          "X-RapidAPI-Key":
            "6d36d4d2e8msh540baa9312641e8p122089jsna02c2fa677bb",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      const { data } = await axios.request(options);
      setGenres(data?.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="nextHeader">
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          {genres &&
            genres?.map((item, index) => <div key={index}>{item}</div>)}
        </div>
      )}
    </div>
  );
};

export default NextHeader;
