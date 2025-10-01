"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    loginName: { type: String, required: true },
    pass: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true, maxlength: 100 },
    phone: { type: String, maxlength: 15 },
    name: { type: String, maxlength: 100 },
    address: { type: String, maxleghth: 500 },
    role: { type: String, enum: ['user', 'staff', 'admin'], default: 'user' },
    status: { type: String, enum: ['unlock', 'lock'], default: 'unlock' },
    dateCreate: { type: Date, default: Date.now },
    dateUpdate: { type: Date, default: Date.now }
}, { timestamps: true });
const userModel = (0, mongoose_1.model)("User", userSchema);
exports.default = userModel;
