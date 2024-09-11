import mongoose from "mongoose";

export default async () => {
  await mongoose.connect(
    "mongodb+srv://dentalBrando:DpTXETcSqu7P64p@dentalbrandoproposalmak.ugsf2qa.mongodb.net/?retryWrites=true&w=majority&appName=dentalbrandoproposalmaker"
  );
};
