"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estateRoutes = void 0;
const express_1 = require("express");
const estate_controller_1 = __importDefault(require("../controllers/estate.controller"));
exports.estateRoutes = (0, express_1.Router)();
exports.estateRoutes.get('/', estate_controller_1.default);
