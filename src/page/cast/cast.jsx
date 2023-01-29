import Navbar from "../../components/navbar/navbar";
import Details from "../../components/details/details";
import Casting from "../../components/casting/casting";
import { useLocation } from "react-router-dom";
import "./cast.css";
import { useEffect, useState } from "react";
import { getAllInfo } from "../../utils/axios";

const Cast = () => {
  const [allData, setMovieData] = useState([]);
  const location = useLocation();
  const pathData = location?.pathname?.split("/");
  const movId = pathData[pathData.length - 1];
  console.log(movId);
  useEffect(() => {
    getAllInfo(movId).then((data) => {
      setMovieData(data);
      console.log(data);
      console.log("all data", allData);
    });
  }, [movId]);

  return (
    <div>
      <Navbar />

      <>
        <Details data={allData} />
        <div className="artist-container">
          {allData?.actorList?.map((data) => (
            <Casting data={data} />
          ))}
        </div>
      </>
    </div>
  );
};
export default Cast;
