const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// Blog routes
router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog);

module.exports = router;
