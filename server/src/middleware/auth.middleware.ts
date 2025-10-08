//auth middleware
import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/user.models";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { IUser } from "../models/user.models";

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

export const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ success: false, message: 'Không có token, truy cập bị từ chối' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as JwtPayload;

    if (!decoded || !decoded.userId) {
      res.status(401).json({ success: false, message: 'Token không hợp lệ' });
      return;
    }

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      res.status(401).json({ success: false, message: 'Token không hợp lệ' });
      return;
    }

    if (user.status === 'lock') {
      res.status(403).json({ success: false, message: 'Tài khoản đã bị khóa' });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Token không hợp lệ' });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user || !roles.includes(req.user.role)) {
      res.status(403).json({ 
        success: false, 
        message: 'Bạn không có quyền truy cập tính năng này' 
      });
      return;
    }
    next();
  };
};
