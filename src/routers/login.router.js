const router = require('express').Router();
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares');

router.post('/', validateLogin.validateLogin, loginController.login);

module.exports = router;