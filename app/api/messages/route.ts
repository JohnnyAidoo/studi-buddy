import connectToDatabase from "@/lib/database";
import Messages from "@/lib/database/models/messages";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { userId, groupId, content, createdAt } = await request.json();

  try {
    const post_data = await Messages.create({
      userId,
      groupId,
      content,
      createdAt,
    });
    return NextResponse.json(post_data, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 404 });
  }
}

export async function GET(request: NextRequest) {
  await connectToDatabase();

  // Get the query parameters from the URL
  const { searchParams } = new URL(request.url);
  const groupId = searchParams.get("groupid");

  try {
    // Find messages with the matching groupId and userId
    const messages = await Messages.find({ groupId });

    return NextResponse.json(messages, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
