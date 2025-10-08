import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  picture?: string;
  googleId: string;
  role: string
  status: string
  description?: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  picture: String,
  googleId: { type: String, required: true },
  role: {type: String, enum:['user','staff','admin'], default:'user'},
  status: {type: String, enum:['lock','unlock'], default:'unlock'},
  description:{type: String}
});

export const userModel = model<IUser>("user", userSchema);
