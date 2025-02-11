import { NextResponse } from "next/server";

let invites: Record<string, any> = {}; // Temporary in-memory storage

export async function POST(req: Request) {
  const body = await req.json();
  const id = Math.random().toString(36).substring(7); // Generate random ID
  invites[id] = body;
  return NextResponse.json({ id });
}

export async function GET(req: Request) {
  return NextResponse.json(invites);
}
