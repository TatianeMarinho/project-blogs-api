const router = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

router.post('/', userMiddleware.userValidate, userController.newUser);

module.exports = router;