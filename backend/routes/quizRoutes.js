const express = require('express');
const quizController = require('../controllers/quizController');

const router = express.Router();

// Quiz routes
router.get('/:blogId', quizController.getQuizByBlogId);
router.post('/', quizController.createQuiz);

module.exports = router;
