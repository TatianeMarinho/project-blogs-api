const postSchema = require('../schemas/postSchema');
const { categoryService } = require('../services');

const validatePost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;

  const listCategories = categoryIds
    .map((categoryId) => categoryService.findOneCategory(categoryId));

  const resultList = (await Promise.all(listCategories)).some((element) => element === null);

  if (resultList) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = { 
  validatePost,
  validateCategory,
};