import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const port = 4000;
 
//middle ware
app.use(express.json());
app.use(cors());

//db comnnection
connectDB();
//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API Working")

})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})