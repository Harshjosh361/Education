import { Schema, model } from 'mongoose';

const quizSchema = new Schema({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String }],
      correctAnswer: { type: String, required: true },
    },
  ],
});

export default model('Quiz', quizSchema);