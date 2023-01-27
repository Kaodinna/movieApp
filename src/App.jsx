import { Route, Routes } from "react-router-dom";
import Homepage from "./page/homepage/homepage";
import SearchPage from "./page/searchpage/searchpage";
import Movies from "./page/movies/movies";
import TvSeries from "./page/tvSeries/tvSeries";
import Cast from "./page/cast/cast";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvseries" element={<TvSeries />} />
        <Route path="/cast/:id" element={<Cast />} />
      </Routes>
    </main>
  );
}

export default App;
