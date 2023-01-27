import "./moviesCategory.css";
const MoviesCategory = ({ handleRequest }) => {
  return (
    <>
      <div>
        <ul className="ul">
          <li onClick={() => handleRequest("Action")}>Action</li>
          <li onClick={() => handleRequest("Adventure")}>Adventure</li>
          <li onClick={() => handleRequest("Animation")}>Animation</li>
          <li onClick={() => handleRequest("Comedy")}>Comedy</li>
          <li onClick={() => handleRequest("Crime")}>Crime</li>
          <li onClick={() => handleRequest("Documentary")}>Documentary</li>
          <li onClick={() => handleRequest("Drama")}>Drama</li>
          <li onClick={() => handleRequest("Family")}>Family</li>
          <li onClick={() => handleRequest("Fantasy")}>FAntasy</li>
          <li onClick={() => handleRequest("History")}>History</li>
        </ul>
      </div>
      <div className="ul-div">
        <ul className="ul">
          <li onClick={() => handleRequest("Horror")}>Horror</li>
          <li onClick={() => handleRequest("Music")}>Music</li>
          <li onClick={() => handleRequest("Mystery")}>Mystery</li>
          <li onClick={() => handleRequest("Romance")}>Romance</li>
          <li onClick={() => handleRequest("Science")}>Science Fiction</li>
          <li onClick={() => handleRequest("TV Movie")}>TV Movie</li>
          <li onClick={() => handleRequest("Thriller")}>Thriller</li>
          <li onClick={() => handleRequest("War")}>War</li>
          <li onClick={() => handleRequest("Western")}>Western</li>
        </ul>
      </div>
    </>
  );
};

export default MoviesCategory;
