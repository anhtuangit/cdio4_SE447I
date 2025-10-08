"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWard = void 0;
const mongoose_1 = require("mongoose");
const ward_models_1 = require("../models/ward.models");
const getAllWard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    try {
        const wards = yield ward_models_1.modelWard.find(query);
        res.status(200).json(wards);
    }
    catch (error) {
        res.status(500).json(mongoose_1.Error.Messages);
    }
});
exports.getAllWard = getAllWard;
