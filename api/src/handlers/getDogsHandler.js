const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

const { BREEDS_API_URL, API_KEY } = process.env;

const getAllDogs = async () => {
  const dogsInDB = await Dog.findAll();
  const response = await axios.get(`${BREEDS_API_URL}?api_key=${API_KEY}`);
  const dogsInAPI = cleanData(response.data);

  return [...dogsInDB, ...dogsInAPI];
};

const searchDogsByName = async (name) => {
  const nameLow = name.toLowerCase();
  const dogsInDB = await Dog.findAll({
    where: {
      name: {
        [Op.like]: `%${nameLow}`,
      },
    },
  });

  const response = await axios.get(`${BREEDS_API_URL}?api_key=${API_KEY}`);
  const dogsInAPI = cleanData(response.data);
  const dogsFiltered = dogsInAPI.filter((dog) =>
    dog.name.toLowerCase().includes(nameLow)
  );

  return [...dogsInDB, ...dogsFiltered];
};

function cleanData(arr) {
  const clean = arr.map((dog) => ({
    id: dog.id,
    name: dog.name,
    image: dog.image.url,
    heightMin: dog.height.metric?.match(/^\d+/)?.[0] ?? "",
    heightMax: dog.height.metric?.match(/\d+$/)?.[0] ?? "",
    weightMin: dog.weight.metric?.match(/^\d+/)?.[0] ?? "",
    weightMax: dog.weight.metric?.match(/\d+$/)?.[0] ?? "",
    life_span: dog.life_span,
    createdByUser: false,
  }));

  return clean;
}

module.exports = { getAllDogs, searchDogsByName };
