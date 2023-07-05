const express = require("express");
const getRestaurants = require("./routes/getRestaurants");
const getRestaurantsById = require("./routes/getRestaurantsById");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/id/:id").get(getRestaurantsById);

module.exports = router; 
