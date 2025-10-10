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
exports.deleteEstate = exports.updateEstate = exports.createEstate = exports.getAllEstate = exports.getEstateById = void 0;
const estates_models_1 = require("../models/estates.models");
// Lấy estate theo ID
const getEstateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const estate = yield estates_models_1.modelEstate.findById(id).populate([
            { path: "type", select: "name" },
            { path: "ward", select: "name", populate: { path: "city", select: "name" } },
            { path: "id_user", select: "_id name" },
        ]);
        if (!estate) {
            res.status(404).json({ success: false, message: "Estate không tồn tại" });
            return;
        }
        res.status(200).json({ success: true, data: estate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Lỗi server", error });
    }
});
exports.getEstateById = getEstateById;
// Lấy danh sách estate
const getAllEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, category, userId } = req.query;
        let query = {};
        if (status)
            query.status = status;
        if (category)
            query.category = category;
        if (userId)
            query.id_user = userId;
        const estates = yield estates_models_1.modelEstate.find(query).populate([
            { path: "type", select: "name" },
            { path: "ward", select: "name", populate: { path: "city", select: "name" } },
            { path: "id_user", select: "_id name" },
        ]);
        res.status(200).json({ success: true, data: estates });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Lỗi server", error });
    }
});
exports.getAllEstate = getAllEstate;
// Tạo estate
const createEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, price, address, ward, category, type, bedroom, bathroom, id_user, } = req.body;
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
        res.status(201).json({ success: true, message: "Tạo estate thành công", data: estate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Lỗi khi tạo estate", error });
    }
});
exports.createEstate = createEstate;
// Cập nhật estate
const updateEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedEstate = yield estates_models_1.modelEstate.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedEstate) {
            res.status(404).json({ success: false, message: "Estate không tồn tại" });
            return;
        }
        res.status(200).json({ success: true, message: "Cập nhật estate thành công", data: updatedEstate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Lỗi khi cập nhật estate", error });
    }
});
exports.updateEstate = updateEstate;
// Xóa estate
const deleteEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedEstate = yield estates_models_1.modelEstate.findByIdAndDelete(id);
        if (!deletedEstate) {
            res.status(404).json({ success: false, message: "Estate không tồn tại" });
            return;
        }
        res.status(200).json({ success: true, message: "Xóa estate thành công" });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Lỗi khi xóa estate", error });
    }
});
exports.deleteEstate = deleteEstate;
