import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.DATABASE_URI, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000,
});

export const auth = betterAuth({
  database: mongodbAdapter(client.db("suncart")),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
});