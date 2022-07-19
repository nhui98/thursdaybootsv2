import mongoose from "mongoose";

export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

const userSchema = new mongoose.Schema<UserType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export default (mongoose.models.User as mongoose.Model<
  UserType,
  {},
  {},
  {},
  any
>) || mongoose.model<UserType>("User", userSchema);
