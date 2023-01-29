import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { apiPopular } from "../../utils/axios";
import ReactPaginate from "react-paginate";
import "./homepage.css";
const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieData, setData] = useState([]);
  useEffect(() => {
    apiPopular().then((data) => {
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
    <>
      <Navbar />

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
    </>
  );
};

export default Homepage;
