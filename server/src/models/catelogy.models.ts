import { model, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const categorySchema = new Schema<ICategory>({
  name: { type: String, required: true }
});

export const modelCategory = model<ICategory>("category", categorySchema);
