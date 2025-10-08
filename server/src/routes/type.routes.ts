import { Router } from "express";
import { getAllType } from "../controllers/type.controller";


export const typeRoute= Router()

typeRoute.get('/', getAllType)