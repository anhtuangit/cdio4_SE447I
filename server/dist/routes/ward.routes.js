"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wardRoute = void 0;
const express_1 = require("express");
const ward_controller_1 = require("../controllers/ward.controller");
exports.wardRoute = (0, express_1.Router)();
exports.wardRoute.get('/', ward_controller_1.getAllWard);
