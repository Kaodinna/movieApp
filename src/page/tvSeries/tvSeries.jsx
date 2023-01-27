import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import TvSeriesCategory from "../../components/tvSeriescategory/tvSeriescategory";
import { fetchData, getSeries } from "../../utils/axios";
const TvSeries = () => {
  const [movieData, setData] = useState([]);
  const handleRequest = async (resuest) => {
    console.log(resuest);
    const data = await getSeries(resuest);
    setData(data.results);
    console.log(data);
  };

  useEffect(() => {
    fetchData("API/Top250TVs").then((data) => {
      console.log(data);
      setData(data.items);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <TvSeriesCategory handleRequest={handleRequest} />

      <div className="movie-div">
        {movieData?.map((info) => (
          <MovieCard data={info} />
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
