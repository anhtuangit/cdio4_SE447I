import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv'

const app  = express();

dotenv.config()

const port = process.env.PORT || 3000

const db =process.env.DB_URI
const serect = process.env.JWT_SECRECT


app.use(express.json());

mongoose.connect('mongodb://localhost:27017/testdb')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
