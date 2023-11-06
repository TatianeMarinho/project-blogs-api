const router = require('express').Router();
const { loginController } = require('../controllers');
const { loginMiddleware } = require('../middlewares');

router.post('/', loginMiddleware.validateLogin, loginController.login);

module.exports = router;