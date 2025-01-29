import { Router } from 'express';
const router = Router();
import { createQuiz, getQuizzesByCourseId, getQuizById, updateQuiz, deleteQuiz } from '../controllers/quizController.js';

// Quiz Routes
/**
 * @swagger
 * tags:
 *   name: Quizzes
 *   description: API for managing quizzes
 */

/**
 * @swagger
 * /courses/{courseId}/quizzes:
 *   post:
 *     summary: Create a quiz for a specific course
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The quiz question
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: The possible answers to the question
 *                     correctAnswer:
 *                       type: string
 *                       description: The correct answer for the question
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/courses/:courseId/quizzes', createQuiz);

/**
 * @swagger
 * /courses/{courseId}/quizzes:
 *   get:
 *     summary: Get all quizzes for a specific course
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     responses:
 *       200:
 *         description: List of quizzes for the course
 *       404:
 *         description: Course not found
 */
router.get('/courses/:courseId/quizzes', getQuizzesByCourseId);

/**
 * @swagger
 * /quizzes/{id}:
 *   get:
 *     summary: Get a quiz by its ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The quiz ID
 *     responses:
 *       200:
 *         description: Quiz found
 *       404:
 *         description: Quiz not found
 */
router.get('/quizzes/:id', getQuizById);

/**
 * @swagger
 * /quizzes/{id}:
 *   put:
 *     summary: Update a quiz by ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The quiz ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questions:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     question:
 *                       type: string
 *                       description: The quiz question
 *                     options:
 *                       type: array
 *                       items:
 *                         type: string
 *                       description: The possible answers to the question
 *                     correctAnswer:
 *                       type: string
 *                       description: The correct answer for the question
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *       404:
 *         description: Quiz not found
 */
router.put('/quizzes/:id', updateQuiz);

/**
 * @swagger
 * /quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The quiz ID
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *       404:
 *         description: Quiz not found
 */
router.delete('/quizzes/:id', deleteQuiz);

export default router;
