import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import { getAllInfo } from "../../utils/axios";
import MovieCard from "../movieCard/MovieCard";
const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [movieData, setData] = useState(null);
  const [currentData, setCurrentData] = useState([]);
  const dataPerPage = 5;

  const latest = async () => {
    const data = await getAllInfo();
    setData(data.data.results);
  };

  useEffect(() => {
    latest();
  }, []);

  useEffect(() => {
    const start = pageNumber * dataPerPage;
    const end = start + dataPerPage;
    setCurrentData(movieData.slice(start, end));
  }, [pageNumber, movieData]);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="movie-div">
        {currentData.map((info) => (
          <MovieCard data={info} />
        ))}
      </div>
      <ReactPaginate
        pageRangeDisplayed={5}
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={Math.ceil(movieData.length / dataPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisable"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default Pagination;
