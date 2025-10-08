import { ICategory, modelCategory } from "../models/catelogy.models"
import { Request, Response } from "express"

export const getAllCategory = async(req: Request, res: Response)=>{
    let query = {} as any
    try {
        const categories= await modelCategory.find(query) as ICategory[]
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
}