import Quiz from '../models/Quiz.js';

// Create a new quiz for a course
export async function createQuiz(req, res) {
  try {
    const quiz = new Quiz(req.body)
    const savedQuiz = await quiz.save()
    res.status(201).json({ 
      quizId: savedQuiz._id, 
      message: "Quiz created successfully" 
    });
  }catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Get all quizzes for a course
export async function getQuizzesByCourseId(req, res) {
  try {
    const quizzes = await Quiz.find({ courseId: req.params.courseId });
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific quiz by ID
export async function getQuizById(req, res) {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a quiz by ID
export async function updateQuiz(req, res) {
  try {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete a quiz by ID
export async function deleteQuiz(req, res) {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}