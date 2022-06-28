import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;

const dbConnect = async () => mongoose.connect(MONGO_URI);

export default dbConnect;
