import { model, Schema } from "mongoose";

export interface IType extends Document {
  name: string;
}
const typeSchema = new Schema<IType>({
  name: { type: String, required: true }
});

export const modelType = model<IType>("type", typeSchema);
