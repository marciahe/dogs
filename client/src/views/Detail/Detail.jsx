import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [dog, setDog] = useState({});

  useEffect(() => {
    async function fetchDog() {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      setDog(response.data);
      setLoading(false);
    }
    fetchDog({});
  }, [id]);

  return (
    <section className={style.detail}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.container}>
          <h1>{dog.name}</h1>
          <div className={style.content}>
            <h3>Characteristics:</h3>
            <p>Minimum height: {dog.heightMin} cm</p>
            <p>Maximum height: {dog.heightMax} cm</p>
            <p>Minimum weight: {dog.weightMin} kg</p>
            <p>Maximum weight: {dog.weightMax} kg</p>
            <p>Life span: {dog.life_span}</p>
            <h4>Temperaments:</h4>
            {dog.temperament && (
              <ul>
                {dog.temperament.map((temp, index) => (
                  <li key={index}>{temp}</li>
                ))}
              </ul>
            )}
          </div>
          <div className={style.image}>
            <img
              src={
                dog.image
                  ? dog.image
                  : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce9484b3-9994-4b30-ab7c-f461ddcef0a0/detxm7r-74d150c4-5c1e-43fc-a87a-345f39260bbb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlOTQ4NGIzLTk5OTQtNGIzMC1hYjdjLWY0NjFkZGNlZjBhMFwvZGV0eG03ci03NGQxNTBjNC01YzFlLTQzZmMtYTg3YS0zNDVmMzkyNjBiYmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tNpGYB6skYQHjrRtoDNzj--LYeA7jhBBIe2uwqib32M"
              }
              alt={dog.name}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Detail;
