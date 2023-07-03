const express = require("express");
const cors = require("cors");
const restaurants = require("./api/restaurants.route");

const app = express();

//configure .env file
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;

//Get database connection file.
const { connectToDB } = require("./db/conn");

//Cors help in connection (by skipping origin policy).
app.use(cors());

//Accept & read json from requests.
app.use(express.json());

//Listen on port and connect to DB.
app.listen(PORT, () => {
  connectToDB();
  console.log(`server running on port : ${PORT}`);
});

//Request to "/api/restaurants" route will be handled by "restaurants.route.js" file.
app.use("/api/restaurants", restaurants);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not Found" });
});
