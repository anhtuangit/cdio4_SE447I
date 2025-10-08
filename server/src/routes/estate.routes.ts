import { Router } from "express";
import { createEstate, getAllEstate } from "../controllers/estate.controller";
import { upload } from "../middleware/upload.middleware";

export const estateRoutes = Router()
estateRoutes.get('/', getAllEstate)
estateRoutes.post("/", upload.array("images", 5), createEstate);
