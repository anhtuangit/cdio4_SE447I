import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const userState = req.body.state || "default"; // Lấy trạng thái từ request
    const userDir = path.join(uploadDir, userState);

    if (!fs.existsSync(userDir)) {
      fs.mkdirSync(userDir);
    }

    cb(null, userDir);
  },
  filename: (_req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
      return cb(new Error("Định dạng file không hợp lệ"), "");
    }

    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
  fileFilter: (_req, file, cb) => {
    const fileExtension = path.extname(file.originalname);
    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
      return cb(new Error("Chỉ cho phép upload file hình ảnh (.jpg, .jpeg, .png)"));
    }

    cb(null, true);
  },
});
