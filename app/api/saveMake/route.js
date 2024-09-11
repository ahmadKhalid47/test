import MakeModel from "../../models/Make";
import connectDb from "../../registration/connectDb";
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
