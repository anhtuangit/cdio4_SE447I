"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRoute = void 0;
const express_1 = require("express");
const city_controller_1 = __importDefault(require("../controllers/city.controller"));
exports.cityRoute = (0, express_1.Router)();
exports.cityRoute.get('/', city_controller_1.default);
