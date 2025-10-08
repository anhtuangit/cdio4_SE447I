"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelDistrict = void 0;
const mongoose_1 = require("mongoose");
const districtSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    city: { type: mongoose_1.Schema.Types.ObjectId, ref: "city", required: true }
});
exports.modelDistrict = (0, mongoose_1.model)("district", districtSchema);
