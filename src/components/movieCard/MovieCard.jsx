import React from "react";
import { Link } from "react-router-dom";
import "./moviecard.css";

function MovieCard({ data }) {
  console.log(data);
  const { id, image, title } = data;
  return (
    <>
      <div className="movie-di" key={id}>
        <img
          width={"400px"}
          height={"400px"}
          className="movie-img"
          src={image ? image : "https://via.placeholder.com/400"}
          alt=""
        />
        <h3 className="movie-title">
          <Link className="title-link" to={`/cast/${id}`}>
            {title}
          </Link>
        </h3>
      </div>
    </>
  );
}

export default MovieCard;
