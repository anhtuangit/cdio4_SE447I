import mongoose, { model, Schema } from "mongoose"
export interface ICity extends Document{
    name: string
}

const citySchema = new Schema<ICity>({
name:{type: String, required: true}
})
export const modelCity = model<ICity>("city",citySchema)

 