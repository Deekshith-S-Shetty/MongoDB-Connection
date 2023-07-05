const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = async function getRestaurantsById(req, res) {
  const db_connection = dbo.getDB();
  let id = req.params.id || {};
  try {
    const result = await db_connection
      .collection("restaurants")
      .findOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    console.log("Cannot get elements by id : " + err);
  }
};
