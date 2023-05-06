import { useState, useEffect } from "react";
import axios from "axios";
// import { validate1, validate2 } from "./validations.js";
import MultiSelect from "../../components/MultiSelect/MultiSelect";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    heightMin: 3,
    heightMax: 6,
    weightMin: 3,
    weightMax: 7,
    min_life_span: 1,
    max_life_span: 2,
    temperament: [],
  });

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

  const changeHandler = (event) => {
    const property = event.target.name;
    let value = event.target.value;

    if (property === "temperament") {
      const selectedTemperaments = temperamentsOptions.filter((temperament) =>
        form.temperament.includes(temperament.name)
      );
      value = selectedTemperaments;
    }

    setForm({ ...form, [property]: value });

    // validate1({ ...form, [property]: value }, errors, setErrors);
    // validate2({ ...form, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    console.log(form);
    event.preventDefault();
    const requiredFields = [
      "name",
      "heightMin",
      "heightMax",
      "weightMin",
      "weightMax",
    ];
    const missingFields = requiredFields.filter((field) => !form[field]);
    if (missingFields.length > 0) {
      console.log(`Missing required fields: ${missingFields.join(", ")}`);
      return;
    }
    axios
      .post("http://localhost:3001/dogs", form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Breed name</label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
          placeholder="Pit Bull"
        ></input>
      </div>

      <div>
        <label>Minimum weight</label>
        <input
          type="number"
          value={form.weightMin}
          onChange={changeHandler}
          name="weightMin"
          placeholder="0"
        ></input>
      </div>
      <div>
        <label>Maximum weight</label>
        <input
          type="number"
          value={form.weightMax}
          onChange={changeHandler}
          name="weightMax"
          placeholder="0"
        ></input>
      </div>

      <div>
        <label>Minimum height</label>
        <input
          type="number"
          value={form.heightMin}
          onChange={changeHandler}
          name="heightMin"
          placeholder="0"
        ></input>
      </div>
      <div>
        <label>Maximum height</label>
        <input
          type="number"
          value={form.heightMax}
          onChange={changeHandler}
          name="heightMax"
          placeholder="0"
        ></input>
      </div>

      <div>
        <label>Minimum life span</label>
        <input
          type="number"
          value={form.min_life_span}
          onChange={changeHandler}
          name="min_life_span"
          placeholder="0"
        ></input>
      </div>
      <div>
        <label>Maximum life span</label>
        <input
          type="number"
          value={form.max_life_span}
          onChange={changeHandler}
          name="max_life_span"
          placeholder="0"
        ></input>
      </div>

      <MultiSelect
        options={temperamentsOptions}
        selectedOptions={form.temperament}
        onChange={(selectedOptions) =>
          setForm({ ...form, temperament: selectedOptions })
        }
      />

      <button type="submit">Submit my Doggie</button>
    </form>
  );
};

export default Form;
