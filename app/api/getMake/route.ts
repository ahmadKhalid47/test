import connectDb from "@/app/registration/connectDb";
import MakeModel from "../../models/Make";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const data = await MakeModel.find();
    return NextResponse.json({ data });
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json(
      {
        error: "Can't process your request at the moment",
      },
      { status: 500 }
    );
  }
}
