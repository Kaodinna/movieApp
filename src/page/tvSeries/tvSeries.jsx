import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import TvSeriesCategory from "../../components/tvSeriescategory/tvSeriescategory";
import { fetchData, getSeries } from "../../utils/axios";
import ReactPaginate from "react-paginate";

const TvSeries = () => {
  const [currentPage, setCurrentPage] = useState(1);
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

  const postPerPage = 20;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentMovies = movieData.slice(indexOfFirstPost, indexOfLastPost);
  const pageCount = Math.ceil(movieData.length / postPerPage);
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <Navbar />
      <TvSeriesCategory handleRequest={handleRequest} />

      <div className="movie-div">
        {currentMovies.map((info) => (
          <MovieCard data={info} />
        ))}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default TvSeries;
