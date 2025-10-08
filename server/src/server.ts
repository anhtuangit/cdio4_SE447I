import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv'
import cors from 'cors';
import jwt from "jsonwebtoken";
import { estateRoutes } from './routes/estate.routes';
import { cityRoute } from './routes/city.routes';
import { wardRoute } from './routes/ward.routes';
import { typeRoute } from './routes/type.routes';
import { categoryRoute } from './routes/category.routes';
import path from 'path';

const app  = express();

app.use(cors());

dotenv.config()

const port = process.env.PORT || 3000

const db =process.env.DB_URI

const secret = process.env.JWT_SECRET


app.use(express.json());

mongoose.connect(db!)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/users', userRoutes);
app.use('/estates',estateRoutes)
app.use('/cities', cityRoute)
app.use('/wards', wardRoute)
app.use('/types', typeRoute)
app.use('/categories', categoryRoute)
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
