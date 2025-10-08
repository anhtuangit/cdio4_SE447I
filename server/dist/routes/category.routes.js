"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoute = void 0;
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
exports.categoryRoute = (0, express_1.Router)();
exports.categoryRoute.get('/', category_controller_1.getAllCategory);
