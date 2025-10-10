import mongoose, { model, Schema } from "mongoose";

export interface IEstate extends Document {
  title: string;
  description?: string;
  price: number;
  address: string
  ward: mongoose.Schema.Types.ObjectId
  category: string
  type: Schema.Types.ObjectId;
  bedroom: number
  bathroom: number
  img_urls: [string]
  status: string
  id_user: mongoose.Schema.Types.ObjectId
}

const estateSchema = new Schema<IEstate>({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  address: { type: String, required: true},
  ward:{type: mongoose.Schema.Types.ObjectId, ref:'ward', required: true},
  category: { type: String, enum:['rental','sale'], required: true },
  type: { type: Schema.Types.ObjectId, ref: "type", required: true },
  bedroom:{type: Number, required: true},
  bathroom:{type: Number, required: true},
  img_urls:{type: [String], default: ['https://example.com/default-image.jpg']},
  status:{type: String, enum:['waiting','approved','cancel'], default:'waiting'},
  id_user: {type: mongoose.Schema.Types.ObjectId, ref:'user', required: true}
}, { timestamps: true })

export const modelEstate = model<IEstate>("estate", estateSchema)
