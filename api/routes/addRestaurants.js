const dbo = require("../../db/conn");

module.exports = async function addRestaurants(req, res) {
  let db_connection = dbo.getDB();
  try {
    let myQuery = {
      name: req.body.name,
      restaurant_id: req.body.id,
      rating: req.body.rating,
    };

    const result = await db_connection
      .collection("restaurants")
      .insertOne(myQuery);
    res.json(result);
  } catch (err) {
    console.log("Unable to add new restaurant detail: " + err);
  }
};
