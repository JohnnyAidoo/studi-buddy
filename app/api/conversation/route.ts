import connectToDatabase from "@/lib/database";
import Conversation from "@/lib/database/models/conversation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { clerkId, documentId, sender, message } = await request.json();
  try {
    const post_data = await Conversation.create({
      clerkId,
      documentId,
      sender,
      message,
    });
    return Response.json(post_data, { status: 201 });
  } catch (err) {
    Response.json(err, { status: 404 });
  }
  return Response.json("did not send post data to database", { status: 501 });
}
