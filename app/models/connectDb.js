import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    "mongodb+srv://ahmadrazakhalid110:RM1dpnTg0GoXyy4A@cluster0.4fv7dem.mongodb.net/"
  );
};

export default connectDb;
