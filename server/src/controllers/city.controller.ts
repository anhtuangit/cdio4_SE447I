import { ICity, modelCity } from "../models/city.models"
import { Request, Response } from "express"


const getAllCity = async(req: Request, res: Response)=>{
    let query = {} as any
    try {
    const cities = await modelCity.find(query) as ICity[]
    res.status(200).json(cities)
    } catch (error) {
        res.status(500).json(error)
    }
}
export default getAllCity