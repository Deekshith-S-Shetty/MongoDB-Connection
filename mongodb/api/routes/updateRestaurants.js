const dbo = require("../../db/conn");
const ObjectId = require("mongodb").ObjectId;

module.exports = async function updateRestaurants(req, res) {
  const db_connection = dbo.getDB();
  try {
    // Generally get the update and query values from request body (req.body.value) or request parameter.
    let myQuery = { _id: new ObjectId("64a5a435c32247987993797e") };
    let setValues = {
      name: "updated name",
      restaurant_id: "222",
      extra_field: "updated extra field",
    };

    let result = await db_connection
      .collection("restaurants")
      .updateOne(myQuery, { $set: setValues });
    res.json(result);
  } catch (err) {
    console.log("Unable to update the restaurant data : " + err);
  }
};
