import { Router } from "express";
import {  createUser, getUserById, getUsers } from "../controllers/user.controller";

const userRoutes = Router()

userRoutes.get('/', getUsers)
userRoutes.get('/:id', getUserById)
userRoutes.get('/register', createUser)

export default userRoutes
 
