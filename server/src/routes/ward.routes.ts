import { Router } from "express";
import { getAllWard } from "../controllers/ward.controller";


export const wardRoute = Router()

wardRoute.get('/', getAllWard)