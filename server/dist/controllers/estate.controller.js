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
exports.createEstate = exports.getAllEstate = void 0;
const estates_models_1 = require("../models/estates.models");
const getAllEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        const estate = yield estates_models_1.modelEstate.find(query).populate([
            { path: 'type', select: 'name' },
            { path: 'ward', select: 'name', populate: { path: 'city', select: 'name' } },
            { path: 'category', select: 'name' },
            { path: 'user', select: '_id' }
        ]);
        res.status(200).json(estate);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllEstate = getAllEstate;
const createEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price, address, ward, category, type, bedroom, bathroom, id_user, } = req.body;
        // Lấy danh sách đường dẫn ảnh từ multer
        const img_urls = req.files.map((file) => `/uploads/${file.filename}`);
        const estate = new estates_models_1.modelEstate({
            title,
            description,
            price,
            address,
            ward,
            category,
            type,
            bedroom,
            bathroom,
            id_user,
            img_urls,
        });
        yield estate.save();
        res.status(201).json({
            message: "Tạo estate thành công",
            data: estate,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Lỗi khi tạo estate", error });
    }
});
exports.createEstate = createEstate;
