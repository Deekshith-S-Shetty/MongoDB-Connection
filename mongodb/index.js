const app = require("./app.js");
const { MongoClient } = require("mongodb");

const dbName = "sample_restaurants";
const collectionName = "restaurants";

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.URI;

async function connectToDB() {

    const client = new MongoClient(URI);
    await client.connect();

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    try {
        const cursor = await collection.find({cuisine:"American"});
        await cursor.forEach(recipe => {
            console.log(recipe);
        })
    }
    catch (err) {
        console.log("An error Occurred " + err.message);
    }
}

connectToDB();

