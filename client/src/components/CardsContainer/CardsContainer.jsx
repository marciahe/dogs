import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const dogs = useSelector((state) => state.dogs);

  if (!dogs || dogs.length === 0) {
    return (
      <div className={style.loading}>
        <img
          className={style.doggie}
          src="https://media.tenor.com/-_q5E02A97oAAAAM/idle-pixel.gif"
          alt="Doggie bailando"
        />
        <p>Loading...</p>
      </div>
    );
  }

  const lastDogIndex = currentPage * dogsPerPage;
  const firstDogIndex = lastDogIndex - dogsPerPage;
  const currentDogs = dogs.slice(firstDogIndex, lastDogIndex);

  return (
    <main className={style.main}>
      {currentDogs.map((dog) => {
        return (
          <Card
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={
              dog.image
                ? dog.image
                : "https://static.vecteezy.com/system/resources/previews/000/581/279/original/vector-dog-faces-pixel-art-icons.jpg"
            }
            // heightMin={dog.heightMin}
            // heightMax={dog.heightMax}
            weightMin={dog.weightMin}
            weightMax={dog.weightMax}
            // life_span={dog.life_span}
            temperaments={dog.temperaments}
          />
        );
      })}

      <Pagination
        totalDogs={dogs.length}
        dogsPerPage={dogsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default CardsContainer;
