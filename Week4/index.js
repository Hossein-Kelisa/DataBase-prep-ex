const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("food_database");
    const recipes = database.collection("recipes");

    const data = require("./recipes.json"); 
    await recipes.insertMany(data);

    console.log("Data inserted successfully!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);