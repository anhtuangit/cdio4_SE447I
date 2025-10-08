import { IEstate, modelEstate } from "../models/estates.models"
import { Request, Response } from "express"


export const getAllEstate = async(req: Request, res: Response)=>{
    try {
        let query = {} as any
        const estate = await modelEstate.find(query).populate([
            {path:'type',select:'name'},
            {path:'ward', select:'name', populate:{path:'city', select:'name'}},
            {path:'category',select:'name'},
            {path:'user',select:'_id'}
        ]) as IEstate[]
        res.status(200).json(estate)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const createEstate = async (req: Request, res: Response) => {
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

    // Lấy danh sách đường dẫn ảnh từ multer
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

    res.status(201).json({
      message: "Tạo estate thành công",
      data: estate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi khi tạo estate", error });
  }
};


