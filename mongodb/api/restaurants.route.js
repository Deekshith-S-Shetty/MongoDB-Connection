const express = require("express");
const getRestaurants = require("./routes/getRestaurants");
const getRestaurantsById = require("./routes/getRestaurantsById");
const addRestaurants = require("./routes/addRestaurants");
const updateRestaurants = require("./routes/updateRestaurants");
const deleteRestaurants = require("./routes/deleteRestaurants");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/id/:id").get(getRestaurantsById);
router.route("/add").get(addRestaurants);
router.route("/update").get(updateRestaurants);
router.route("/delete/:id").get(deleteRestaurants);

module.exports = router;
