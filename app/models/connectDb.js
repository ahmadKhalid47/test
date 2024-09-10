import mongoose from "mongoose";

export default async function connectDb() {
  await mongoose.connect(process.env.DATABASE_URL);
};
