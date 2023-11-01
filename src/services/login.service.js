const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET_KEY = process.env.JWT_SECRET || '1234';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const execute = async (email, password) => {
  const findUser = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['email', 'pasword'] },
  });

  if (!findUser) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  
  const { id, displayName, image } = findUser.dataValues;

  const token = generateToken({ id, displayName, image });

  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  execute,
};