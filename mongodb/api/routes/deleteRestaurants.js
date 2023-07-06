const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = async function deleteRestaurants(req, res) {
  const db_connection = dbo.getDB();
  try {
    let myQuery = { _id: new ObjectId(req.params.id) };
    let result = await db_connection
      .collection("restaurants")
      .deleteOne(myQuery);
    res.json(result);
  } catch (err) {
    console.log("Unable to delete the data from the database : " + err);
  }
};
