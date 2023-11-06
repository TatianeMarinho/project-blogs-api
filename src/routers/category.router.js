const router = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddleware, auth } = require('../middlewares');

router.post('/', auth, categoryMiddleware.nameValidate, categoryController.newCategory);

router.get('/', auth, categoryController.getCategories);

module.exports = router;