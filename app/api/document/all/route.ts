import connectToDatabase from "@/lib/database";
import Document from "@/lib/database/models/document";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectToDatabase();

  // Get the query parameter
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  try {
    if (!userId) {
      return NextResponse.json(
        { error: "userId parameter is required" },
        { status: 400 }
      );
    }
    const documents = await Document.find({
      clerkId: userId,
    });
    if (!documents) {
      return NextResponse.json(
        { error: "Document not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(documents, { status: 200 });
  } catch (err) {
    return NextResponse.json(err, { status: 404 });
  }
}
