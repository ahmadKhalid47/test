import connectDb from "../../models/connectDb";
import MakeModel from "../../models/Make";
import { NextResponse } from "next/server";
export const fetchCache = "force-no-store";

export async function GET() {
  connectDb();
  try {
    const data = await MakeModel.find();
    return  NextResponse.json({ data });
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
