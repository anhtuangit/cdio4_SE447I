"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelWard = void 0;
const mongoose_1 = require("mongoose");
const wardSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
});
exports.modelWard = (0, mongoose_1.model)("ward", wardSchema);
