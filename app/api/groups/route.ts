import connectToDatabase from "@/lib/database";
import Group from "@/lib/database/models/groups";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  await connectToDatabase();
  const { name, description, imageUrl, created_at } = await request.json();
  try {
    const post_data = await Group.create({
      name,
      description,
      imageUrl,
      created_at,
    });
    return Response.json(post_data, { status: 201 });
  } catch (err) {
    Response.json(err, { status: 404 });
  }
  return Response.json("did not send post data to database", { status: 501 });
}

export async function GET(request: NextRequest) {
  await connectToDatabase();

  try {
    const groups = await Group.find();

    if (groups) {
      return Response.json(groups, { status: 200 });
    } else {
      return Response.json({ error: "No group" });
    }
  } catch (err: any) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
