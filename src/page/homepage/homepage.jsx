import React, { useState, useEffect } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Navbar from "../../components/navbar/navbar";
import { apiPopular } from "../../utils/axios";
import "./homepage.css";
import ReactPaginate from "react-paginate";
const Homepage = () => {
  const mockData = [
    {
      id: "tt1436480",
      resultType: "Title",

      image:
        "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_Ratio0.7568_AL_.jpg",
      title: "Undefined",
      description: "2006 Video Ralph Cooley, Phillip Enriquez",
    },
    {
      id: "tt5581814",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTk1OTcwYTQtMmEyNS00OWFiLTlmOWYtZGQ1ZDczNjc3MWFkXkEyXkFqcGdeQXVyMTAwMjMyOTE@._V1_Ratio1.9189_AL_.jpg",
      title: "Undefined",
      description: "2014 Short Christine Choueiri, Julian Farhat",
    },
    {
      id: "tt16757246",
      resultType: "Title",
      image: "",
      title: "Undefined",
      description: "TV Series",
    },
    {
      id: "tt20117552",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BY2M2YzE5NzctY2NiNS00YTUxLTk4YjUtYjIzMzk3NmNmODlkXkEyXkFqcGdeQXVyMTA2Mzc5Njc0._V1_Ratio0.8108_AL_.jpg",
      title: "Chai - a bond undefined",
      description: "Vikas Verma, Gaurav Alugh",
    },
    {
      id: "tt7178924",
      resultType: "Title",
      image:
        "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_Ratio1.7838_AL_.jpg",
      title: "Undefined: A Muslim-American Musical",
      description: "2017 Short Jenny Burks, Jared Cardenas",
    },
    {
      id: "nm6808524",
      resultType: "Name",
      image: "",
      title: "Undefined Undefined",
      description:
        "Writer, Spam Letter + Google Image Search = Video Entertainment (2005)",
    },
    {
      id: "nm11956602",
      resultType: "Name",
      image: "",
      title: "Underlined",
      description: "Composer, Charnel House of Ill Repute (2020)",
    },
    {
      id: "nm5632051",
      resultType: "Name",
      image: "",
      title: "Andi Royer",
      description: "Additional Crew, Oceans Rising (2017)",
    },
    {
      id: "nm12725380",
      resultType: "Name",
      image: "",
      title: "Corlia Ohlson de Fine",
      description: "Editorial Department, RattleSnake: The Ahanna Story (2020)",
    },
    {
      id: "nm1506383",
      resultType: "Name",
      image: "",
      title: "Lene De Fine Licht",
      description: "Production Designer, To søstre (1984)",
    },
  ];

  //   const [pageNumber, setPageNumber] = useState(0);
  const [movieData, setData] = useState([]);

  //   const latest = async () => {
  //     return getAllInfo();
  //   };

  useEffect(() => {
    apiPopular().then((data) => {
      console.log(data);
      setData(data.items);
    });
  }, []);

  //   const dataPerPage = 5;
  //   const pagesVisited = pageNumber * dataPerPage;

  //   const displayData = data
  //     .slice(pagesVisited, pagesVisited + dataPerPage)
  //     .map((data) => {
  //       return (
  //         <div className="movie-di" key={data.id}>
  //           <img
  //             className="movie-img"
  //             src={
  //               data.image !== "" ? data.image : "https://via.placeholder.com/400"
  //             }
  //             alt=""
  //           />
  //           <h3 className="movie-title">{data.title}</h3>
  //         </div>
  //       );
  //     });

  //   const part = Math.ceil(data.length / dataPerPage);
  //   const changePage = ({ selected }) => {
  //     setPageNumber(selected);
  //   };

  return (
    <>
      <Navbar />

      <div className="movie-div">
        {movieData?.map((info) => (
          <MovieCard data={info} />
        ))}
      </div>

      <div className="paginate-div">
        <ReactPaginate
          pageRangeDisplayed={5}
          previousLabel="Previous"
          nextLabel="Next"
          //   pageCount={part}
          //   onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisable"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default Homepage;
