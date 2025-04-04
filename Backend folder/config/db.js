
import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://shikhaagrahari076:9044090276@cluster0.667m5it.mongodb.net/college Eatery').then(()=>console.log("DB Connected"));
}