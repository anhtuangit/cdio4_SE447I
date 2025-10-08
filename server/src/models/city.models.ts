import mongoose, { model, Schema } from "mongoose"


export interface ICity extends Document{
    name: string
    ward: mongoose.Schema.Types.ObjectId;
}

const citySchema = new Schema<ICity>({
name:{type: String, required: true},
ward:{type: mongoose.Schema.Types.ObjectId, ref:'ward'}
})
export const modelCity = model<ICity>("city",citySchema)

 