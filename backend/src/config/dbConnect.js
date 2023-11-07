import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.DB_CONNECTION_STRING);

let db = mongoose.connection;

export default db;
