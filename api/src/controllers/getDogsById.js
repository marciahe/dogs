const axios = require("axios");
require("dotenv").config();

const { BREEDS_API_URL, API_KEY } = process.env;

const getDogsById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `${BREEDS_API_URL}${id}?api_key=${API_KEY}`
    );
    const { name, reference_image_id, height, weight, life_span } =
      response.data;

    const cleanResponse = {
      id,
      name,
      image: `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`,
      heightMin: height.metric?.match(/^\d+/)?.[0] ?? "",
      heightMax: height.metric?.match(/\d+$/)?.[0] ?? "",
      weightMin: weight.metric?.match(/^\d+/)?.[0] ?? "",
      weightMax: weight.metric?.match(/\d+$/)?.[0] ?? "",
      life_span,
    };
    res.status(200).json(cleanResponse);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getDogsById;
