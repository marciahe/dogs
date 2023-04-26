const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require("../controllers/getDogs");
const getDogsById = require("../controllers/getDogsById");
const getTemperaments = require("../controllers/getTemperaments");
// const express = require("express");
// const server = express();
// server.use(express.json());

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getDogs);

router.get("/dogs/:id", getDogsById);

// router.get("/dogs/name", getDogsByName);

// router.post("/dogs", postDog);

router.get("/temperaments", getTemperaments);

module.exports = router;

//* Respuesta de la API: 1 raza
// {
// "weight": {
// "imperial": "50 - 60",
// "metric": "23 - 27"
// },
// "height": {
// "imperial": "25 - 27",
// "metric": "64 - 69"
// },
// "id": 2,
// "name": "Afghan Hound",
// "country_code": "AG",
// "bred_for": "Coursing and hunting",
// "breed_group": "Hound",
// "life_span": "10 - 13 years",
// "temperament": "Aloof, Clownish, Dignified, Independent, Happy",
// "origin": "Afghanistan, Iran, Pakistan",
// "reference_image_id": "hMyT4CDXR"
// }
