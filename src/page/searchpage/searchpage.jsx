// import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { getData } from "../../utils/axios";
import "./searchpage.css";

const SearchPage = () => {
  const [searchParam, setSearchParam] = useState("true");
  const [showMovie, setShowMovie] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };
  const handleSearch = async () => {
    const data = await getData(searchParam);
    setMovies(data.results);
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="search-div">
        <label className="search-label">
          <input
            type="text"
            className="input"
            placeholder="search movies"
            onChange={(e) => handleChange(e)}
          />
          <div className="search-text-div">
            <button className="search-text" onClick={(e) => handleSearch()}>
              Search
            </button>
          </div>
        </label>

        <div className="container">
          {true && movies.map((data) => <MovieCard data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
