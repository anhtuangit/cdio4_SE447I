import mongoose, { model, Schema } from "mongoose";

export interface IEstate extends Document {
  title: string;
  description?: string;
  price: number;
  address: Schema.Types.ObjectId;
  addressDetail: string
  category: Schema.Types.ObjectId;
  type: Schema.Types.ObjectId;
  img_url: string
  id_user: mongoose.Schema.Types.ObjectId
}

const estateSchema = new Schema<IEstate>({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  address: { type: Schema.Types.ObjectId, ref: "city", required: true },
  addressDetail:{type: String, required: true, minLength:15},
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  type: { type: Schema.Types.ObjectId, ref: "type", required: true },
  img_url:{type: String, required:true},
  id_user: {type: mongoose.Schema.Types.ObjectId, required: true}
}, { timestamps: true });

export const modelEstate = model<IEstate>("estate", estateSchema);
