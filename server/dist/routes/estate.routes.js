"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estateRoute = void 0;
const express_1 = __importDefault(require("express"));
const estate_controller_1 = require("../controllers/estate.controller");
exports.estateRoute = express_1.default.Router();
// Quản lý estate
exports.estateRoute.get('/', estate_controller_1.getAllEstate);
exports.estateRoute.get('/:id', estate_controller_1.getEstateById);
exports.estateRoute.post('/', estate_controller_1.createEstate);
exports.estateRoute.patch('/:id', estate_controller_1.updateEstate);
exports.estateRoute.delete('/:id', estate_controller_1.deleteEstate);
