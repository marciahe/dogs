import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <div
          className={style.img}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
        {/* <p>{props.id}</p> */}
        <h3>{props.name}</h3>
        <p>
          Height: {props.heightMin} to {props.heightMax} cm
        </p>
        <p>
          Weight: {props.weightMin} to {props.weightMax} kg
        </p>
        <p>Life span: {props.life_span ? props.life_span : "unknown"}</p>
        {props.temperaments && (
          <ul className={style.temps}>
            {props.temperaments.map((temp) => (
              <li key={props.name + temp}>{temp}</li>
            ))}
          </ul>
        )}
      </Link>
    </div>
  );
};

export default Card;
