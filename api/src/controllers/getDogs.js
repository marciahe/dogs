const axios = require("axios");
const { Dog, Temperament } = require("../db");
require("dotenv").config();

const { BREEDS_API_URL, API_KEY } = process.env;

const getDogs = async (req, res) => {
  try {
    const response = await axios.get(`${BREEDS_API_URL}?api_key=${API_KEY}`);
    const dogs = response.data.map(
      ({ id, name, image, height, weight, life_span }) => ({
        id,
        name,
        image,
        height,
        weight,
        life_span,
      })
    );
    res.status(200).json(dogs);
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send("Not found :O");
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = getDogs;
