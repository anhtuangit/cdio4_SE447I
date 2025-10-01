"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: { type: String, required: true, maxLength: 10, unique: true },
    pass: { type: String, required: true, minLength: 6 },
    description: { type: String, maxLength: 100 },
    star: { type: Number, default: 1, min: 1, max: 5 },
    createDate: { type: Date, default: Date.now }
}, { timestamps: true });
const bookModel = (0, mongoose_1.model)("book", bookSchema);
exports.default = bookModel;
