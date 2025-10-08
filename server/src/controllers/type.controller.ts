import { IType, modelType } from "../models/type.models"
import { Request, Response } from "express"


export const getAllType = async(req: Request, res: Response)=>{
    let query = {} as any
    try {
        const types = await modelType.find(query) as IType[]
        res.status(200).json(types)
    } catch (error) {
        res.status(500).json(error)
    }
}