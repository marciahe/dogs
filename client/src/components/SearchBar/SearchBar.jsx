import { useState } from "react";
// import style from "./SearchBar.modules.css";

export default function SearchBar({ onSearch }) {
  const [id, setID] = useState("");

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setID("");
    }
  };

  const handleButtonClick = () => {
    onSearch(id);
    setID(""); // establecer el estado del componente en una cadena vacía después de agregar el elemento a la lista
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={id}
      />
      <button className="cta" onClick={handleButtonClick}>
        Search dog
      </button>
    </div>
  );
}
