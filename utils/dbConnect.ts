import mongoose from "mongoose";

const conn = {
  isConnected: false,
};

const dbConnect = async () => {
  if (conn.isConnected) return;

  console.log(process.env.MONGO_URI);

  if (!process.env.MONGO_URI) {
    throw new Error("where is mongo uri?");
  }

  const db = await mongoose.connect(process.env.MONGO_URI as string);
  // @ts-ignore
  conn.isConnected = db.connections[0].readyState;
  // await mongoose.connect(process.env.MONGO_URI as string);
};

export default dbConnect;
