const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = async function updateRestaurants(req, res) {
  const db_connection = dbo.getDB();
  try {
    let myQuery = { _id: new ObjectId(req.params.id) };
    let setValues = {
      name: req.body.name,
      restaurant_id: req.body.id,
      rating: req.body.rating,
    };

    let result = await db_connection
      .collection("restaurants")
      .updateOne(myQuery, { $set: setValues });
    res.json(result);
  } catch (err) {
    console.log("Unable to update the restaurant data : " + err);
  }
};
