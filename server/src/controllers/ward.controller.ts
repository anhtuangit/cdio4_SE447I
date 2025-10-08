import { Error } from "mongoose"
import { Request, Response } from "express"
import { IWard, modelWard } from "../models/ward.models"

export const getAllWard = async(req:Request, res: Response)=>{
    let query = {} as any
    try {
        const wards = await modelWard.find(query) as IWard[]
        res.status(200).json(wards)
    } catch (error) {
        res.status(500).json(Error.Messages)
    }
}