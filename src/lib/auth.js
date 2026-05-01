
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.DATABASE_URI);

export const auth = betterAuth({
  database: mongodbAdapter(client.db("suncart")),
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },
});