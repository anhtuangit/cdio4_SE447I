import express from 'express';
import { getAllEstate, createEstate, updateEstate, deleteEstate, getEstateById } from '../controllers/estate.controller';

export const estateRoute = express.Router();

// Quản lý estate
estateRoute.get('/', getAllEstate);
estateRoute.get('/:id', getEstateById);
estateRoute.post('/', createEstate);
estateRoute.patch('/:id', updateEstate);
estateRoute.delete('/:id', deleteEstate);

