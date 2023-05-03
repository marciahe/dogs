import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();

  const [dog, setDog] = useState({});

  useEffect(() => {
    async function fetchDog() {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      setDog(response.data);
    }
    fetchDog({});
  }, [id]);

  return (
    <section>
      {dog ? (
        <div>
          <h1>{dog.name ? dog.name : "Detail"}</h1>
          <p>Minimum height: {dog.heightMin ? dog.heightMin : "Unknown"}</p>
          <p>Maximum height: {dog.heightMax ? dog.heightMax : "Unknown"}</p>
          <p>Minimum weight: {dog.weightMin ? dog.weightMin : "Unknown"}</p>
          <p>Maximum height: {dog.weightMax ? dog.weightMax : "Unknown"}</p>
          <p>Life span: {dog.life_span ? dog.life_span : "Unknown"}</p>
          {dog.temperament && (
            <ul>
              {dog.temperament.map((temp, index) => (
                <li key={index}>{temp}</li>
              ))}
            </ul>
          )}
          <img
            src={
              dog.image
                ? dog.image
                : "https://www.crossdogs.org/images/dog-placeholder.png"
            }
            alt={dog.name}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Detail;
