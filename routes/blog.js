const express = require("express");
const blog = require('../controller/blog')

const router = express.Router()


router.get('/', blog.getBlogs);
router.get('/:id', blog.getBlog)
router.post('/', blog.createBlog)


module.exports = router;

