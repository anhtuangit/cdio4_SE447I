import { Request, Response } from 'express';
import { userModel } from '../models/user.models';
import { IUser } from '../models/user.models';

// Lấy danh sách người dùng
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await userModel.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi server', error });
  }
};

// Lấy thông tin người dùng theo ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const user: IUser | null = await userModel.findById(id);

    if (!user) {
      res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
      return;
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Lỗi server', error});
  }
};

// Tạo mới người dùng
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const newUser: IUser = new userModel(req.body);
    const savedUser = await newUser.save();

    res.status(201).json({ success: true, data: savedUser });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Không thể tạo người dùng', error });
  }
};

// Cập nhật thông tin người dùng
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedUser) {
      res.status(404).json({ success: false, message: 'Người dùng không tồn tại' });
      return;
    }

    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Không thể cập nhật người dùng', error });
  }
};

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


 
