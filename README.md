# Educational Platform API

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your MongoDB URI and port.
4. Run `npm run dev` to start the server.

## API Endpoints

### Course Endpoints

- **POST /api/courses**: Create a new course.
- **GET /api/courses**: Retrieve all courses.
- **GET /api/courses/:id**: Retrieve a specific course by ID.
- **PUT /api/courses/:id**: Update a course by ID.
- **DELETE /api/courses/:id**: Delete a course by ID.

### Quiz Endpoints

- **POST /api/courses/:courseId/quizzes**: Create a new quiz for a course.
- **GET /api/courses/:courseId/quizzes**: Retrieve all quizzes for a course.
- **GET /api/quizzes/:id**: Retrieve a specific quiz by ID.
- **PUT /api/quizzes/:id**: Update a quiz by ID.
- **DELETE /api/quizzes/:id**: Delete a quiz by ID.

## API Documentation
You can view the live API documentation powered by Swagger at the following URL once the server is running:- http://localhost:<PORT>/api-docs
