const router = require('express').Router();
const { blogPostController } = require('../controllers');
const { blogPostMiddleware, auth } = require('../middlewares');

router.get(
  '/',
  auth,
  blogPostController.getBlogPost,
);

router.post(
  '/',
  auth,
  blogPostMiddleware.validatePost,
  blogPostMiddleware.validateCategory,
  blogPostController.newBlogPost,
);

module.exports = router;