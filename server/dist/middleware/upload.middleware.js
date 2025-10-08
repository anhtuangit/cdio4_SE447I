"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const uploadDir = path_1.default.join(__dirname, "../../uploads");
if (!fs_1.default.existsSync(uploadDir)) {
    fs_1.default.mkdirSync(uploadDir);
}
const storage = multer_1.default.diskStorage({
    destination: (req, _file, cb) => {
        const userState = req.body.state || "default"; // Lấy trạng thái từ request
        const userDir = path_1.default.join(uploadDir, userState);
        if (!fs_1.default.existsSync(userDir)) {
            fs_1.default.mkdirSync(userDir);
        }
        cb(null, userDir);
    },
    filename: (_req, file, cb) => {
        const fileExtension = path_1.default.extname(file.originalname);
        const allowedExtensions = [".jpg", ".jpeg", ".png"];
        if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
            return cb(new Error("Định dạng file không hợp lệ"), "");
        }
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
exports.upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
    fileFilter: (_req, file, cb) => {
        const fileExtension = path_1.default.extname(file.originalname);
        const allowedExtensions = [".jpg", ".jpeg", ".png"];
        if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
            return cb(new Error("Chỉ cho phép upload file hình ảnh (.jpg, .jpeg, .png)"));
        }
        cb(null, true);
    },
});
