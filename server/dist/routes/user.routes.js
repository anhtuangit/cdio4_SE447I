"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', user_controller_1.getUsers);
userRoutes.get('/:id', user_controller_1.getUserById);
userRoutes.get('/register', user_controller_1.createUser);
exports.default = userRoutes;
