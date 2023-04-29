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
    res
      .status(500)
      .send({ error: "Middleware: Error while creating Temperaments" });
  }
};

const createTemperaments = async () => {
  const response = await axios.get(`${BREEDS_API_URL}?api_key=${API_KEY}`);
  const breeds = response.data;
  const temperamentsSet = new Set();

  // Obtenemos los temperamentos de cada raza y se agregan al Set
  breeds.forEach((breed) => {
    if (breed.temperament) {
      breed.temperament.split(",").forEach((temp) => {
        temperamentsSet.add(temp.trim());
      });
    }
  });

  // Convertimos el Set de temperamentos a un array y se guarda en la base de datos
  const temperamentsArray = Array.from(temperamentsSet);
  const createdTemperaments = await Temperament.bulkCreate(
    temperamentsArray.map((temp) => ({ name: temp }))
  );
  console.log("Temperaments were created");
  return createdTemperaments;
};

module.exports = checkTemperamentsLoaded;
