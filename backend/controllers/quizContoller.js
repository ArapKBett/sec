const Quiz = require('../models/Quiz');

// Get quiz by blog ID
exports.getQuizByBlogId = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ blogId: req.params.blogId });
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new quiz
exports.createQuiz = async (req, res) => {
  const quiz = new Quiz({
    blogId: req.body.blogId,
    questions: req.body.questions,
  });

  try {
    const newQuiz = await quiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
