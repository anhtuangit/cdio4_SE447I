"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeRoute = void 0;
const express_1 = require("express");
const type_controller_1 = require("../controllers/type.controller");
exports.typeRoute = (0, express_1.Router)();
exports.typeRoute.get('/', type_controller_1.getAllType);
