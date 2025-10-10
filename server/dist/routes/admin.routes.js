"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin.controller");
exports.adminRoute = express_1.default.Router();
exports.adminRoute.get('/users', admin_controller_1.getUsers);
exports.adminRoute.patch('/users/:id', admin_controller_1.toggleUserLock);
exports.adminRoute.get('/posts', admin_controller_1.getEstate);
exports.adminRoute.patch('/posts/:id/approve', admin_controller_1.approveEstate);
