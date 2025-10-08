"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRoute = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin.controller");
exports.staffRoute = express_1.default.Router();
// Xem và duyệt bài đăng
exports.staffRoute.get('/posts', admin_controller_1.getEstate);
exports.staffRoute.patch('/posts/:id/approve', admin_controller_1.approveEstate);
