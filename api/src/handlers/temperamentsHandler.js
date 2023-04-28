const axios = require("axios");
require("dotenv").config();
const { Temperament } = require("../db");

const { BREEDS_API_URL, API_KEY } = process.env;

const returnTemperaments = async () => {
  const temperaments = await Temperament.findAll();

  if (temperaments.length > 0) {
    const cleanTemps = temperaments.map(({ dataValues: { id, name } }) => ({
      id,
      name,
    }));

    return cleanTemps;
  } else {
    const temps = await createTemperaments();
    const cleanTemps = temps.map(({ dataValues: { id, name } }) => ({
      id,
      name,
    }));
    console.log("Se crearon los Temperamentos");
    return cleanTemps;
  }
};

const createTemperaments = async () => {
  const response = await axios.get(`${BREEDS_API_URL}?api_key=${API_KEY}`);
  const breeds = response.data;
  const temperamentsSet = new Set();

  // Obtener los temperamentos de cada raza y agregarlos al Set
  breeds.forEach((breed) => {
    if (breed.temperament) {
      breed.temperament.split(",").forEach((temp) => {
        temperamentsSet.add(temp.trim());
      });
    }
  });

  // Convertir el Set de temperamentos a un array y guardarlo en la base de datos
  const temperamentsArray = Array.from(temperamentsSet);
  const createdTemperaments = await Temperament.bulkCreate(
    temperamentsArray.map((temp) => ({ name: temp }))
  );
  return createdTemperaments;
};

module.exports = { createTemperaments, returnTemperaments };
