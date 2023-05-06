import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getDogs } from "../../redux/actions";
import { Link } from "react-router-dom";
// import style from "./SearchBar.modules.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const dogs = useSelector((state) => state.dogs);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredDogs = () => {
    const filteredDogs = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredDogs);
  };

  useEffect(() => {
    getFilteredDogs();
  }, [searchTerm, dogs]);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      {searchTerm.length > 1 && (
        <ul>
          {searchResults.map((dog) => (
            <Link to={`/detail/${dog.id}`} key={dog.id}>
              <li>{dog.name}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
