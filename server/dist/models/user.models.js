"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: String,
    googleId: { type: String, required: true },
    role: { type: String, enum: ['user', 'staff', 'admin'], default: 'user' },
    status: { type: String, enum: ['lock', 'unlock'], default: 'unlock' },
    description: { type: String }
});
exports.userModel = (0, mongoose_1.model)("user", userSchema);
