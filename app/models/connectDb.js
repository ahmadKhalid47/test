import mongoose from "mongoose";

export default async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://ahmadrazakhalid110:RM1dpnTg0GoXyy4A@cluster0.4fv7dem.mongodb.net/"
  );
}
