import { Router } from "express";
import getAllCity from "../controllers/city.controller";


export const cityRoute= Router()

cityRoute.get('/',getAllCity)