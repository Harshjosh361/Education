import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Course API',
      version: '1.0.0',
      description: 'API for managing courses & quizzes',
    },
  },
  apis: ['./routes/courseRoutes.js' , './routes/quizRoutes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(json());


// Routes
app.use('/api', courseRoutes);
app.use('/api', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});