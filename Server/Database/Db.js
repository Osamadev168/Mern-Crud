import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const Connection = () => {
  mongoose.connect(process.env.dburl, () => {
    console.log("db connected");
  });
};
