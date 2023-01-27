const TvSeriesCategory = ({ handleRequest }) => {
  return (
    <div>
      <div>
        <ul className="ul">
          <li onClick={() => handleRequest("Action and Adventure")}>
            Action & Adventure
          </li>
          <li onClick={() => handleRequest("Animation")}>Animation</li>
          <li onClick={() => handleRequest("Comedy")}>Comedy</li>
          <li onClick={() => handleRequest("Crime")}>Crime</li>
          <li onClick={() => handleRequest("Documentary")}>Documentary</li>
          <li onClick={() => handleRequest("Drama")}>Drama</li>
          <li onClick={() => handleRequest("Family")}>Family</li>
          <li onClick={() => handleRequest("Kids")}>Kids</li>
          <li onClick={() => handleRequest("Mystery")}>Mystery</li>
        </ul>
      </div>
      <div className="ul-div">
        <ul className="ul">
          <li onClick={() => handleRequest("News")}>News</li>
          <li onClick={() => handleRequest("Reality")}>Reality</li>
          <li onClick={() => handleRequest("Sci-Fi & Fantasy")}>
            Sci-Fi & Fantasy
          </li>
          <li onClick={() => handleRequest("Soap")}>Soap</li>
          <li onClick={() => handleRequest("Talk")}>Talk</li>
          <li onClick={() => handleRequest("War & Politics")}>
            War & Politics
          </li>
          <li onClick={() => handleRequest("Western")}>Western</li>
        </ul>
      </div>
    </div>
  );
};

export default TvSeriesCategory;
