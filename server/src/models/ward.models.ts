import mongoose, { model, Schema } from "mongoose"

export interface IWard extends Document{
    name: string
    city: mongoose.Schema.Types.ObjectId
}
const wardSchema = new Schema<IWard>({
    name:{type: String, required:true},
    city:{type: mongoose.Schema.Types.ObjectId, ref:'city'}
})

export const modelWard = model<IWard>("ward", wardSchema)