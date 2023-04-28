const axios = require("axios");
require("dotenv").config();
const { Temperament } = require("../db");
const { returnTemperaments } = require("../handlers/temperamentsHandler");

const { BREEDS_API_URL, API_KEY } = process.env;

const checkTemperamentsLoaded = async (req, res, next) => {
  try {
    console.log("Pasó por el middleware");
    const temperaments = await returnTemperaments();
    if (temperaments.length > 0) {
      next();
    } else {
      await createTemperaments();
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al cargar los temperamentos" });
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
  console.log("Se crearon los Temperamentos");
  return createdTemperaments;
};

module.exports = checkTemperamentsLoaded;
