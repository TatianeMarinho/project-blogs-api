const router = require('express').Router();
const { userController } = require('../controllers');
const { userMiddleware, auth } = require('../middlewares');

router.post('/', userMiddleware.userValidate, userController.newUser);

router.get('/', auth, userController.getUsers);

module.exports = router;