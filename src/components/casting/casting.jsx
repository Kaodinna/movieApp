import "./casting.css";
const Casting = ({ data }) => {
  console.log(data);
  return (
    <div className="container_actor">
      <img className="cast-photo" src={data.image} alt="actor" srcset="" />
      <span>{data.name}</span>
      <span>{data.asCharacter}</span>
    </div>
  );
};

export default Casting;
