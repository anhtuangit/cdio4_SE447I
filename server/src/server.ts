import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv'
import cors from 'cors';
import jwt from "jsonwebtoken";
import { cityRoute } from './routes/city.routes';
import { wardRoute } from './routes/ward.routes';
import { typeRoute } from './routes/type.routes';
import path from 'path';
import { estateRoute} from './routes/estate.routes';
import { adminRoute } from './routes/admin.routes';
import { staffRoute } from './routes/staff.routes';

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

app.use('/api/users', userRoutes);
app.use('/api/estates',estateRoute)
app.use('/cities', cityRoute)
app.use('/wards', wardRoute)
app.use('/types', typeRoute)
app.use('/api/admin', adminRoute);
app.use('/api/staff', staffRoute);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
