const loginMiddleware = require('./login.middlewares');
const userMiddleware = require('./user.middleware');
const auth = require('./authenticate.middleware');
const categoryMiddleware = require('./category.middleware');

module.exports = {
  loginMiddleware,
  userMiddleware,
  auth,
  categoryMiddleware,
};