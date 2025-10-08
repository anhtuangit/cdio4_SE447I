import { Schema, Document, model } from "mongoose";
import bcrypt from 'bcrypt'
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
  email: { type: String, required: true, unique: true, trim: true },
  pass: { type: String, required: true },
  role: {type: String, enum:['user','staff','admin'], default:'user'},
  status: {type: String, enum:['lock','unlock'], default:'unlock'},
  description:{type: String},
  avatar_url:{type: String}
});
//hash pass

userSchema.pre("save", async function (next) {
  if (!this.isModified("pass")) return next();
  this.pass = await bcrypt.hash(this.pass, 10);
  next();
});

export const userModel = model<IUser>("user", userSchema);
