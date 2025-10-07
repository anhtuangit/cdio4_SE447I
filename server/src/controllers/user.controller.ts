import { Request, Response } from 'express';
import userModel, { IUser } from '../models/user.models';

export const getAllUsers = async (req: Request, res: Response) => {

  try {
    let query = {} as any
    const users = await userModel.find(query) as IUser[];
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


 
