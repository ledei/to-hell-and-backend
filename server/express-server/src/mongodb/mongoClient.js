import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

let db = undefined;
const dbName = "chatt-app";
export function fetchCollection(name) {
  return connectDB().collection(name);
}

function connectDB() {
  if (db != undefined) {
    return db;
  }

  const url = `mongodb+srv://${process.env.ACCESS_MONGODB_USERNAME}:${process.env.ACCESS_MONGODB_PASSWORD}@to-hell-and-backend.ujj99ts.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  db = client.db(dbName);

  return db;
}
