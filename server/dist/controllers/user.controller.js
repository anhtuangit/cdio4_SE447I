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
exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const user_models_1 = require("../models/user.models");
// Lấy danh sách người dùng
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_models_1.userModel.find();
        res.status(200).json({ success: true, data: users });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Lỗi server', error });
    }
});
exports.getUsers = getUsers;
// Lấy thông tin người dùng theo ID
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_models_1.userModel.findById(id);
        if (!user) {
            res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
            return;
        }
        res.status(200).json({ success: true, data: user });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Lỗi server', error });
    }
});
exports.getUserById = getUserById;
// Tạo mới người dùng
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = new user_models_1.userModel(req.body);
        const savedUser = yield newUser.save();
        res.status(201).json({ success: true, data: savedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Không thể tạo người dùng', error });
    }
});
exports.createUser = createUser;
// Cập nhật thông tin người dùng
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedUser = yield user_models_1.userModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
            return;
        }
        res.status(200).json({ success: true, data: updatedUser });
    }
    catch (error) {
        res.status(400).json({ success: false, message: 'Không thể cập nhật người dùng', error });
    }
});
exports.updateUser = updateUser;
// Xóa người dùng
// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await userModel.findByIdAndDelete(id);
//     if (!deletedUser) {
//       res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
//       return;
//     }
//     res.status(200).json({ success: true, message: 'Xóa người dùng thành công' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Không thể xóa người dùng', error });
//   }
// };
