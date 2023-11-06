const router = require('express').Router();
const { categoryController } = require('../controllers');
const { categoryMiddleware, auth } = require('../middlewares');

router.post('/', auth, categoryMiddleware.nameValidate, categoryController.newCategory);

module.exports = router;