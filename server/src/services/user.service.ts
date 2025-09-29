import { promiseHooks } from 'v8';
import User, { IUserDocument } from '../models/user.models';

const getAllUsers = async (): Promise<IUserDocument[]> => {
  return await User.find();
};

const getUserById = async (id: string): Promise<IUserDocument | null> => {
  return await User.findById(id);
};

export default { getAllUsers, getUserById };
