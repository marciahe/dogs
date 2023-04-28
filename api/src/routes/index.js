const { Router } = require("express");
const getDogs = require("../controllers/getDogs");
const getDogsById = require("../controllers/getDogsById");
const getTemperaments = require("../controllers/getTemperaments");
const postDog = require("../controllers/postDog");

const router = Router();

router.get("/dogs", getDogs);

router.get("/dogs/:id", getDogsById);

router.post("/dogs", postDog);

router.get("/temperaments", getTemperaments);

module.exports = router;
