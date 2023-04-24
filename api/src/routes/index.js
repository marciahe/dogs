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
