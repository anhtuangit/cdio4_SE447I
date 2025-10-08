import express from 'express';
import { approveEstate, getEstate } from '../controllers/admin.controller';

export const staffRoute = express.Router();

// Xem và duyệt bài đăng
staffRoute.get('/posts', getEstate);
staffRoute.patch('/posts/:id/approve', approveEstate);
