import { Request, Response } from 'express';
import { modelEstate } from '../models/estates.models';

// Xem danh sách bài đăng
export const getEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const estates = await modelEstate.find();
    res.status(200).json({ success: true, data: estates });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// Duyệt bài đăng
export const approveEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { approved } = req.body; // approved = true/false

    const updatedEstate = await modelEstate.findByIdAndUpdate(id, { status: approved ? 'approved' : 'rejected' }, { new: true });

    if (!updatedEstate) {
      res.status(404).json({ success: false, message: 'Bài đăng không tồn tại' });
      return;
    }

    res.status(200).json({ success: true, data: updatedEstate });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Không thể cập nhật trạng thái bài đăng', error });
  }
};