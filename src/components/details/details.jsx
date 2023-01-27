import "./details.css";
import { useState } from "react";
import Player from "../Player/Player";
const Details = ({ data }) => {
  console.log("data", data);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((pre) => !pre);
    // alert("clicked");
  };

  return (
    <div>
      <div className="details-div">
        <img className="profile-image" src={data.image} alt="" />
        <div className="movieTitle">{data.title}</div>
        <div className="description">
          {data.plot}
          <span className="release">Release Date {data.releaseDate}</span>
        </div>
      </div>
      <div className="btn">
        <button onClick={() => setModalIsOpen(true)} className="play-trailer">
          Play Trailer
        </button>
      </div>
      {modalIsOpen && (
        <div>
          <Player
            toggleModal={toggleModal}
            url={data.trailer.linkEmbed}
            title={data.title}
          />
        </div>
      )}
    </div>
  );
};

export default Details;
