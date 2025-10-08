import express from 'express';
import { getUsers, toggleUserLock, getEstate, approveEstate } from '../controllers/admin.controller';

export const adminRoute = express.Router();

// Quản lý người dùng
adminRoute.get('/users', getUsers);
adminRoute.patch('/users/:id/lock', toggleUserLock);

// Quản lý bài đăng
adminRoute.get('/posts', getEstate);
adminRoute.patch('/posts/:id/approve', approveEstate);
