import connectDb from "@/app/registration/connectDb";
import MakeModel from "../../models/Make";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    let { make } = await req.json();
    connectDb();
    await new MakeModel({ make }).save();
    return NextResponse.json({
      success: "User Created",
    });
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json({
      error: "Can't process your request at the moment",
    });
  }
};
