const express = require("express");
const getRestaurants = require("./routes/getRestaurants");
const getRestaurantsById = require("./routes/getRestaurantsById");
const addRestaurants = require("./routes/addRestaurants");
const updateRestaurants = require("./routes/updateRestaurants");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/id/:id").get(getRestaurantsById);
router.route("/add").get(addRestaurants);
router.route("/update").get(updateRestaurants);

module.exports = router;
