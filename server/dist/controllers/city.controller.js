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
const city_models_1 = require("../models/city.models");
const getAllCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let query = {};
    try {
        const cities = yield city_models_1.modelCity.find(query);
        res.status(200).json(cities);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.default = getAllCity;
