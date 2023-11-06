const loginMiddleware = require('./login.middlewares');
const userMiddleware = require('./user.middleware');
const auth = require('./authenticate.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  auth,
};