import { Router } from 'express';
import { createCourse, getAllCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courseController.js';

const router = Router();

// course routes
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: API for managing courses
 */

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of all courses
 *       500:
 *         description: Server error
 */
router.get('/courses', getAllCourses);

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: number
 *               instructorName:
 *                 type: string
 *               language:
 *                 type: string
 *               level:
 *                 type: string
 *               price:
 *                 type: number
 *               status:
 *                 type: string
 *               visibility:
 *                 type: string
 *               chapters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     description:
 *                       type: string
 *                     videoLink:
 *                       type: string
 *                     duration:
 *                       type: number
 *     responses:
 *       201:
 *         description: Course created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/courses', createCourse);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course found
 *       404:
 *         description: Course not found
 */
router.get('/courses/:id', getCourseById);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
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
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: number
 *               instructorName:
 *                 type: string
 *               language:
 *                 type: string
 *               level:
 *                 type: string
 *               price:
 *                 type: number
 *               status:
 *                 type: string
 *               visibility:
 *                 type: string
 *               chapters:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     content:
 *                       type: string
 *                     description:
 *                       type: string
 *                     videoLink:
 *                       type: string
 *                     duration:
 *                       type: number
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 */
router.put('/courses/:id', updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The course ID
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 */
router.delete('/courses/:id', deleteCourse);

export default router;
