import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

//---------------------------------------------------------------------

// cors configuration 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//telling server that you can accept json format data and setting its limit
app.use(express.json({limit: "16kb"}));

//url configuration (telling server that you can accept data from url and encoding it)
app.use(express.urlencoded({limit: "16kb"}));

// cookies configuration
app.use(cookieParser()) ;

//----------------------------------------------------------------------
//Routes import
import addIncomeRouter from "./routes/addIncome.routes.js"



//----------------------------------------------------------------------
//Routes decleration
app.use("/api/v1", addIncomeRouter)




export default app;