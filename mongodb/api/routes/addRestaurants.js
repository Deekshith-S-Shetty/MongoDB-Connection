const dbo = require("../../db/conn");

module.exports = async function addRestaurants(req, res) {
  let db_connection = dbo.getDB();
  // usually take the inputs for query from the request body (req.body.input).
  let myQuery = {
    name: "Some name",
    restaurant_id: "111",
    extra_field: "Some Extra Field",
  };
  const result = await db_connection
    .collection("restaurants")
    .insertOne(myQuery);
  res.json(result);
};