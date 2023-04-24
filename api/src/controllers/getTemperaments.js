const axios = require("axios");
require("dotenv").config();

const { BREEDS_API_URL, API_KEY } = process.env;

const getTemperaments = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `${BREEDS_API_URL}${id}?api_key=${API_KEY}`
    );
    const { name, image, height, weight, life_span } = response.data;
    // const metricHeight = height.metric;
    // const metricWeight = weight.metric;

    const [heightMin, heightMax] = height.metric.split(" - ");
    const [weightMin, weightMax] = weight.metric.split(" - ");
    res.status(200).json({
      id,
      name,
      image,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span,
    });
  } catch (error) {
    if (error.response.status === 404) {
      res.status(404).send("Not found =(");
    } else {
      res.status(500).send(error.message);
    }
  }
};

module.exports = getTemperaments;
