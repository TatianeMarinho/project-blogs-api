const router = require('express').Router();
const { blogPostController } = require('../controllers');
const { blogPostMiddleware, auth } = require('../middlewares');

router.post(
  '/',
  auth,
  blogPostMiddleware.validatePost,
  blogPostMiddleware.validateCategory,
  blogPostController.newBlogPost,
);

module.exports = router;