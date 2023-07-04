const dbo = require("../../db/conn");

module.exports = async function getRestaurants(req, res) {
    let db_connection = dbo.getDB();
    try {
        const result = await db_connection.collection("restaurants").find({}).toArray();
        res.json(result);
    } catch (err) {
        console.log(err);
    }
}