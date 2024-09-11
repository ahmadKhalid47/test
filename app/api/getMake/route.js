import MakeModel from "../../models/Make";
import connectDb from "../../registration/connectDb";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    await connectDb();
    const data = await MakeModel.find();
    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (err) {
    console.log("err: ", err);
    return NextResponse.json(
      { error: "Can't process your request at the moment" },
      {
        status: 500,
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  }
};
