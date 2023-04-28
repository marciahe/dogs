const { returnTemperaments } = require("../handlers/temperamentsHandler");

const getTemperaments = async (req, res) => {
  try {
    const temps = await returnTemperaments();
    console.log("Llego");
    res.status(200).json(temps);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getTemperaments;
