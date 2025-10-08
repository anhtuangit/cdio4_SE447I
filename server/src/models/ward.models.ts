import { model, Schema } from "mongoose"

export interface IWard extends Document{
    name: string
    city: Schema.Types.ObjectId
}
const wardSchema = new Schema<IWard>({
    name:{type: String, required:true},
})

export const modelWard = model<IWard>("ward", wardSchema)