import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import quizRoutes from './routes/quizRoutes.js';

config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Routes
app.use('/api', courseRoutes);
app.use('/api', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});