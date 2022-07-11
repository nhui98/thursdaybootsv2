import mongoose from "mongoose";

async function dbConnect() {
  /* connecting to our database */
  if (!process.env.MONGO_URI) throw new Error("no mongo uri string");

  await mongoose.connect(process.env.MONGO_URI);
}

export default dbConnect;
