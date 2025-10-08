import express from 'express';
import { getAllEstate, createEstate, updateEstate, deleteEstate } from '../controllers/estate.controller';

export const estateRoute = express.Router();

// Quản lý estate
estateRoute.get('/', getAllEstate);
estateRoute.post('/', createEstate);
estateRoute.patch('/:id', updateEstate);
estateRoute.delete('/:id', deleteEstate);

