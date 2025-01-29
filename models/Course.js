import { Schema, model } from 'mongoose';

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  instructorName: { type: String, required: true },
  language: { type: String, required: true },
  level: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'published' },
  visibility: { type: String, default: 'public' },
  chapters: [
    {
      title: { type: String, required: true },
      content: { type: String },
      description: { type: String },
      videoLink: { type: String },
      duration: { type: Number },
    },
  ],
});

export default model('Course', courseSchema);