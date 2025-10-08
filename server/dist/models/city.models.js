"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelCity = void 0;
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    name: { type: String, required: true }
});
exports.modelCity = (0, mongoose_1.model)("city", citySchema);
