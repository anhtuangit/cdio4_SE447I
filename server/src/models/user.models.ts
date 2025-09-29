import mongoose, { Schema, Document, HydratedDocument, Model } from 'mongoose';
import { IUser } from '../types/user.types';


const userSchema = new Schema<IUser> extend Document({
  loginName:{ type: String, required: true},
  pass:{ type: String, required:true},
  email:{ type: String, required:true, unique:true, trim: true, maxlength: 100},
  phone:{ type: String, maxlength:15 },
  name:{ type: String, maxlength:100},
  address:{ type: String, maxleghth:500},
  role:{ type: String, enum: ['user','staff','admin'], default:'user'},
  status:{ type: String, enum:['unlock','lock'], default:'unlock'},
  dateCreate:{ type: Date, default: Date.now},
  dateUpdate:{ type: Date, default: Date.now}


});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
export default User;
