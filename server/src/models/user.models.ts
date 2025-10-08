import mongoose, { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  pass: string
  role: string
  status: string
  description?: string
  avatar_url: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  role: {type: String, enum:['user','staff','admin'], default:'user'},
  status: {type: String, enum:['lock','unlock'], default:'unlock'},
  description:{type: String},
  avatar_url:{type: String}
});

export const userModel = model<IUser>("user", userSchema);
