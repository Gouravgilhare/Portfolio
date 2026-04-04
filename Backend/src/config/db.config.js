import mongoose from "mongoose";
import "./dotenv.config.js";

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URI;
    const conn = await mongoose.connect(url, {
      maxPoolSize: 20,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;