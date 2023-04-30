import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      {/* <div style={{ backgroundImage: `url(${image})` }}></div> */}
      {/* <img src={`${props.image}`} alt="test" /> */}
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.heightMin}</p>
      <p>{props.heightMax}</p>
      <p>{props.weightMin}</p>
      <p>{props.weightMax}</p>
      <p>{props.life_span}</p>
      {props.temperaments && (
        <ul>
          {props.temperaments.map((temp) => (
            <li key={props.name + temp}>{temp}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Card;
