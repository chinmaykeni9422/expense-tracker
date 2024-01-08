import dotenv from "dotenv"
import connectDB from "./db/DB_CONNECT.js"

dotenv.config({
    path: "./.env"
})
  

connectDB();