const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// User routes
router.post('/register', userController.registerUser);
router.get('/:userId/scores', userController.getUserScores);

module.exports = router;
