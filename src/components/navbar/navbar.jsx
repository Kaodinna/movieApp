import { MdOutlineWhatshot as Hot } from "react-icons/md";
import { TbMovie as Movie } from "react-icons/tb";
import { SlScreenDesktop as Screen } from "react-icons/sl";
import { TfiSearch as Search } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="main-div">
        <h1 className="movieshub">MoviesHub</h1>
        <Link className="trending-link" to={"/"}>
          <Hot className="hot-icon" />
          <h2 className="trending">Trendings</h2>
        </Link>
        <Link className="trending-link" to={"/movies"}>
          <Movie className="movie-icon" />
          <h2 className="movie">Movies</h2>
        </Link>
        <Link className="trending-link" to={"/tvseries"}>
          <Screen className="tv-screen" />
          <h2 className="tv-series">TV Series</h2>
        </Link>
        <Link className="trending-link" to={"/search"}>
          <Search className="search-icon" />
          <h2 className="search-bar">Search</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
