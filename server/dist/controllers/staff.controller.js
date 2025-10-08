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
exports.approveEstate = exports.getEstate = void 0;
const estates_models_1 = require("../models/estates.models");
// Xem danh sách bài đăng
const getEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const estates = yield estates_models_1.modelEstate.find();
        res.status(200).json({ success: true, data: estates });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Lỗi server', error });
    }
});
exports.getEstate = getEstate;
// Duyệt bài đăng
const approveEstate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { approved } = req.body; // approved = true/false
        const updatedEstate = yield estates_models_1.modelEstate.findByIdAndUpdate(id, { status: approved ? 'approved' : 'rejected' }, { new: true });
        if (!updatedEstate) {
            res.status(404).json({ success: false, message: 'Bài đăng không tồn tại' });
            return;
        }
        res.status(200).json({ success: true, data: updatedEstate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Không thể cập nhật trạng thái bài đăng', error });
    }
});
exports.approveEstate = approveEstate;
