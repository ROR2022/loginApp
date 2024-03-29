import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";


export async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connected to:", db.connection.db.namespace);    
  } catch (error) {
    console.error(`Talvez hay un error en la conexion a la DB:...${error}`);
  }
}