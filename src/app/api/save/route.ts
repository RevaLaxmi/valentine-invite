import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, dateDetails } = await req.json();
  
  console.log("Received:", name, dateDetails);
  
  return NextResponse.json({ message: "Success!" });
}
