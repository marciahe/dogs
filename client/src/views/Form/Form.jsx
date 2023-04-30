import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    minHeight: "",
    maxHeight: "",
    minWeight: "",
    maxWeight: "",
    min_life_span: "",
    max_life_span: "",
    temperaments: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
  };
  return (
    <form>
      <div>
        <label>Breed name</label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
        ></input>
      </div>

      <div>
        <label>Minimum weight</label>
        <input
          type="number"
          value={form.minHeight}
          onChange={changeHandler}
          name="minHeight"
        ></input>
      </div>
      <div>
        <label>Maximum weight</label>
        <input
          type="number"
          value={form.maxHeight}
          onChange={changeHandler}
          name="maxHeight"
        ></input>
      </div>

      <div>
        <label>Minimum height</label>
        <input
          type="number"
          value={form.minWeight}
          onChange={changeHandler}
          name="minWeight"
        ></input>
      </div>
      <div>
        <label>Maximum height</label>
        <input
          type="number"
          value={form.maxWeight}
          onChange={changeHandler}
          name="maxWeight"
        ></input>
      </div>

      <div>
        <label>Minimum life span</label>
        <input
          type="number"
          value={form.min_life_span}
          onChange={changeHandler}
          name="min_life_span"
        ></input>
      </div>

      <div>
        <label>Maximum life span</label>
        <input
          type="number"
          value={form.max_life_span}
          onChange={changeHandler}
          name="max_life_span"
        ></input>
      </div>

      <div>
        <label>Temperaments</label>
        <input
          type="text"
          value={form.temperaments}
          onChange={changeHandler}
          name="temperaments"
        ></input>
      </div>
    </form>
  );
};

export default Form;
