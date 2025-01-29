import { Router } from 'express';
const router = Router();
import { createQuiz, getQuizzesByCourseId, getQuizById, updateQuiz, deleteQuiz } from '../controllers/quizController.js';

// Quiz routes
router.post('/courses/:courseId/quizzes', createQuiz);
router.get('/courses/:courseId/quizzes', getQuizzesByCourseId);
router.get('/quizzes/:id', getQuizById);
router.put('/quizzes/:id', updateQuiz);
router.delete('/quizzes/:id', deleteQuiz);

export default router;