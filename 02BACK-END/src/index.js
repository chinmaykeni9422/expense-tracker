import dotenv from "dotenv"
import connectDB from "./db/DB_CONNECT.js"
import app from "./app.js";

dotenv.config({
    path: "./.env"
})
  

connectDB()
.then(() => {
    // to check any error is there after db connection
    app.on("error", (error) => {
        console.log("Error : ", error);
        throw error ;
    });

    // start the server 
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`Server is listening at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO DB Connection Failed !!! ", error);
});