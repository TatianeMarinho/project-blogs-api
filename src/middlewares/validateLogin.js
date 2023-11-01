const loginSchema = require('./loginSchema');

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = { validateLogin };