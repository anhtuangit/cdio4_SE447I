import { IEstate, modelEstate } from "../models/estates.models";
import { Request, Response } from "express";

// Lấy danh sách estate
export const getAllEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, category, userId } = req.query;

    let query: any = {};
    if (status) query.status = status;
    if (category) query.category = category;
    if (userId) query.id_user = userId;

    const estates = await modelEstate.find(query).populate([
      { path: "type", select: "name" },
      { path: "ward", select: "name", populate: { path: "city", select: "name" } },
      { path: "id_user", select: "_id name" },
    ]) as IEstate[];

    res.status(200).json({ success: true, data: estates });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi server", error });
  }
};

// Tạo estate
export const createEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
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
    } = req.body;
    
    const img_urls = (req.files as Express.Multer.File[]).map(
      (file) => `/uploads/${file.filename}`
    );

    const estate = new modelEstate({
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

    await estate.save();

    res.status(201).json({ success: true, message: "Tạo estate thành công", data: estate });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi khi tạo estate", error });
  }
};

// Cập nhật estate
export const updateEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedEstate = await modelEstate.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedEstate) {
      res.status(404).json({ success: false, message: "Estate không tồn tại" });
      return;
    }

    res.status(200).json({ success: true, message: "Cập nhật estate thành công", data: updatedEstate });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi khi cập nhật estate", error});
  }
};

// Xóa estate
export const deleteEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedEstate = await modelEstate.findByIdAndDelete(id);

    if (!deletedEstate) {
      res.status(404).json({ success: false, message: "Estate không tồn tại" });
      return;
    }

    res.status(200).json({ success: true, message: "Xóa estate thành công" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi khi xóa estate", error });
  }
};


