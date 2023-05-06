import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { connect } from "react-redux";
import { getDogs, filterByTemps, filterByCreated } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const [temperamentsOptions, setTemperamentsOptions] = useState([]);

  useEffect(() => {
    async function fetchTemperaments() {
      const response = await fetch("http://localhost:3001/temperaments");
      const data = await response.json();
      setTemperamentsOptions(
        data.map((temperament, index) => ({
          name: temperament.name,
          key: index,
        }))
      );
    }
    fetchTemperaments();
  }, []);

  const [selectedTemperament, setSelectedTemperament] = useState([]);

  const handleTemperamentChange = (event) => {
    const selectedTemp = event.target.value;
    setSelectedTemperament(selectedTemp);
    dispatch(filterByTemps([selectedTemp]));
  };

  const [selectedCreated, setSelectedCreated] = useState("");

  const handleCreatedChange = (event) => {
    const selectedCreated = event.target.value;
    setSelectedCreated(selectedCreated);
    dispatch(filterByCreated(selectedCreated));
  };

  return (
    <section>
      <h1>Home</h1>
      <select value={selectedTemperament} onChange={handleTemperamentChange}>
        <option value="">Filter by temperament</option>
        {temperamentsOptions.map((option) => (
          <option key={option.key} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <select value={selectedCreated} onChange={handleCreatedChange}>
        <option value="All">Created by...</option>
        <option key="1" value="user">
          Created by User
        </option>
        <option key="2" value="api">
          Original Doggies
        </option>
      </select>

      <CardsContainer />
    </section>
  );
};

export default Home;
