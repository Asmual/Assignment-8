import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URI);

export async function PUT(request) {
  await client.connect();

  const { email, name, image } = await request.json();

  const db = client.db("suncart");
  const usersCollection = db.collection("user");

  const result = await usersCollection.updateOne(
    { email: email },
    { $set: { name, image } }
  );

  return NextResponse.json({ success: result.modifiedCount > 0 });
}
