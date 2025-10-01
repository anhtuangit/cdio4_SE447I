import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv'
import cors from 'cors';

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
