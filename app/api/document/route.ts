import connectToDatabase from "@/lib/database";
import Document from "@/lib/database/models/document";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { clerkId, name, key, documentIdFromApi, documentIdFromStorage, Url } =
    await request.json();

  try {
    const post_data = await Document.create({
      clerkId,
      name,
      key,
      documentIdFromStorage,
      Url,
    });
    return NextResponse.json(post_data, { status: 201 });
  } catch (err) {
    return NextResponse.json(err, { status: 404 });
  }
}

export async function GET(request: NextRequest) {
  await connectToDatabase();

  // Get the query parameter
  const { searchParams } = new URL(request.url);
  const documentIdFromStorage = searchParams.get("documentIdFromStorage");
  try {
    if (!documentIdFromStorage) {
      return NextResponse.json(
        { error: "documentIdFromStorage parameter is required" },
        { status: 400 }
      );
    }
    const documents = await Document.findOne({
      documentIdFromStorage: documentIdFromStorage,
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
