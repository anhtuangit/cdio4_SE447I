"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelType = void 0;
const mongoose_1 = require("mongoose");
const typeSchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.modelType = (0, mongoose_1.model)("type", typeSchema);
