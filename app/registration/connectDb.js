import mongoose from "mongoose";

const connectDb = async () => {
  await mongoose.connect(
    // "mongodb+srv://ahmadrazakhalid110:RM1dpnTg0GoXyy4A@cluster0.4fv7dem.mongodb.net/"
    "mongodb+srv://dentalBrando:DpTXETcSqu7P64p@dentalbrandoproposalmak.ugsf2qa.mongodb.net/?retryWrites=true&w=majority&appName=dentalbrandoproposalmaker"
  );
};

export default connectDb;
