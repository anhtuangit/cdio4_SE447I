"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estateRoutes = void 0;
const express_1 = require("express");
const estate_controller_1 = require("../controllers/estate.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
exports.estateRoutes = (0, express_1.Router)();
exports.estateRoutes.get('/', estate_controller_1.getAllEstate);
exports.estateRoutes.post("/", upload_middleware_1.upload.array("images", 5), estate_controller_1.createEstate);
