import { IEstate, modelEstate } from "../models/estates.models"
import { Request, Response } from "express"


const getAllEstate = async(req: Request, res: Response)=>{
    try {
        let query = {} as any
        const estate = await modelEstate.find(query) as IEstate[]
        res.status(200).json(estate)
    } catch (error) {
        res.status(500).json(error)
    }
}

export default getAllEstate