import style from "./Player.module.css";

function Player({ url, toggleModal, title }) {
  console.log(url);
  return (
    <div>
      <div className={style.modal}>
        <div className={style.modal_content}>
          <span className={style.title}>{title}</span>
          <iframe
            className={style.ifram}
            title="My Video"
            src={url}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <button onClick={() => toggleModal(false)} className={style.close}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
