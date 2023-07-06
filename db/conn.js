const { MongoClient } = require("mongodb");

const dbName = "sample_restaurants";

const URI = process.env.URI;

var connection;

module.exports = {
  //function to Connect to db (Remember to close the connection in Production).
  connectToDB: async function () {
    const client = new MongoClient(URI);

    await client
      .connect()
      .catch((err) => {
        console.log("Unable to connect to db: " + err);
        process.exit();
      })
      .then(() => {
        connection = client.db(dbName);
        console.log("Successfully connected to MongoDB!");
      });
  },

  //return the connection to query the database.
  getDB: function () {
    return connection;
  },
};
