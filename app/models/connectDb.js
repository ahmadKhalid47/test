import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};