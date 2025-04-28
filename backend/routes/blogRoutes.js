const express = require('express');
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', authMiddleware, getBlogs);
router.post('/', authMiddleware, adminMiddleware, createBlog);
router.put('/:id', authMiddleware, adminMiddleware, updateBlog);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBlog);

module.exports = router;
