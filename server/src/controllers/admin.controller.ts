import { Request, Response } from 'express';
import { userModel } from '../models/user.models';
import { modelEstate } from '../models/estates.models';

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userModel.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

export const toggleUserLock = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { lock } = req.body; 

    const updatedUser = await userModel.findByIdAndUpdate(id, { trang_thai: lock ? 'lock' : 'active' }, { new: true });

    if (!updatedUser) {
      res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
      return;
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Không thể cập nhật trạng thái người dùng', error });
  }
};

export const getEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const estates = await modelEstate.find();
    res.status(200).json({ success: true, data: estates });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

export const approveEstate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { approved } = req.body; 

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