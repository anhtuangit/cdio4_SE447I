import { Router } from "express";
import getAllEstate from "../controllers/estate.controller";

export const estateRoutes = Router()
estateRoutes.get('/', getAllEstate)
