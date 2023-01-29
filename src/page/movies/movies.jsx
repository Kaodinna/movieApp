import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import MoviesCategory from "../../components/moviesCategory/moviesCategory";
import { fetchData, getData } from "../../utils/axios";
import MovieCard from "../../components/movieCard/MovieCard";
import ReactPaginate from "react-paginate";
import("./movies.css");

const Movies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [movieData, setMovieData] = useState([]);

  const mockData = [
    {
      id: "tt0073992",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTA0Mzg0MTI1NDFeQTJeQWpwZ15BbWU3MDA1MDA1MzE@._V1_Ratio0.7297_AL_.jpg",
      title: "Family",
      description: "1976–1980 TV Series Sada Thompson, James Broderick",
    },
    {
      id: "tt0182576",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_Ratio0.7568_AL_.jpg",
      title: "Family Guy",
      description: "1999– TV Series Seth MacFarlane, Alex Borstein",
    },
    {
      id: "tt1442437",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_Ratio0.6757_AL_.jpg",
      title: "Modern Family",
      description: "2009–2020 TV Series Ed O'Neill, Sofía Vergara",
    },
    {
      id: "tt0101272",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BMmJhZTlhNzUtNzAwZC00YjQ2LTkxOGEtNzBmOWVkMmUxNTBiXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_Ratio0.6757_AL_.jpg",
      title: "The Addams Family",
      description: "1991 Anjelica Huston, Raul Julia",
    },
    {
      id: "tt0096579",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BZmM1OTU0ZDgtYzExNC00ODJkLWI2NGMtODgyOGJjMzg3NTBmXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_Ratio0.6757_AL_.jpg",
      title: "Family Matters",
      description: "1989–1998 TV Series Reginald VelJohnson, Jaleel White",
    },
    {
      id: "nm10427024",
      resultType: "Name",
      image: "",
      title: "Family",
      description: "",
    },
    {
      id: "nm3717496",
      resultType: "Name",
      image: "",
      title: "The Adams Family",
      description: "",
    },
    {
      id: "nm4944306",
      resultType: "Name",
      image: "",
      title: "The Adams Family",
      description: "",
    },
    {
      id: "nm6522148",
      resultType: "Name",
      image: "",
      title: "The Connors Family",
      description: "",
    },
    {
      id: "nm4251451",
      resultType: "Name",
      image: "",
      title: "The Whittaker Family",
      description: "Self, The 37th Annual People's Choice Awards (2011)",
    },
  ];
  const handleRequest = async (resuest) => {
    console.log(resuest);
    const data = await getData(resuest);
    setMovieData(data.results);
    console.log(data);
  };
  useEffect(() => {
    fetchData("API/Top250Movies").then((data) => {
      setMovieData(data.items);
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
      <MoviesCategory handleRequest={handleRequest} />
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

export default Movies;
