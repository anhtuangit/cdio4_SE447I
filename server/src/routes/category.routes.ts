import { Router } from "express";
import { getAllCategory } from "../controllers/category.controller";


export const categoryRoute= Router()

categoryRoute.get('/', getAllCategory)