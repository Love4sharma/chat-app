import mongoose from "mongoose";
import dontenv from "dotenv";
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb connected successfully", conn);
  } catch (err) {
    console.log("mongodb connection error", err);
  }
};

export default connectDB;
