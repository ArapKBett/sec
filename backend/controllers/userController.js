const User = require('../models/User');

// Register a new user
exports.registerUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get user quiz scores
exports.getUserScores = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('quizScores.quizId');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.quizScores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
