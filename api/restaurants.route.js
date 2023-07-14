const express = require("express");
const getRestaurants = require("./routes/getRestaurants");
const getRestaurantsById = require("./routes/getRestaurantsById");
const addRestaurants = require("./routes/addRestaurants");
const updateRestaurants = require("./routes/updateRestaurants");
const deleteRestaurants = require("./routes/deleteRestaurants");

const router = express.Router();

router.route("/").get(getRestaurants);
router.route("/id/:id").get(getRestaurantsById);
router.route("/add").post(addRestaurants);
router.route("/update/:id").post(updateRestaurants);
router.route("/delete/:id").delete(deleteRestaurants);

module.exports = router;
