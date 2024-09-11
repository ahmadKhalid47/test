import MakeModel from "../../models/Make";
import connectDb from "../../registration/connectDb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    let { make } = await req.json();
    connectDb();
    await new MakeModel({ make }).save();

    const response = NextResponse.json({
      success: "User Created",
    });

    // Set cache control headers to prevent caching
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );

    return response;
  } catch (err) {
    console.log("err: ", err);

    const errorResponse = NextResponse.json({
      error: "Can't process your request at the moment",
    });

    // Set cache control headers for error response as well
    errorResponse.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );

    return errorResponse;
  }
};
