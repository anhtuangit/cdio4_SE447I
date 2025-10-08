"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authorRouter = (0, express_1.Router)();
authorRouter.post('/', auth_controller_1.googleLogin);
exports.default = authorRouter;
