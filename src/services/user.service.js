const { User } = require('../models');
const generateToken = require('../utils/token');

const createrUser = async (email, password, displayName, image) => {
  const findUser = await User.findOne({
    where: { email },
    attributes: { exclude: ['email', 'password'] },
  });

  if (findUser !== null) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken(newUser.displayName, newUser.id, newUser.image);

  return { status: 'CREATED', data: { token } };
};

module.exports = {
  createrUser,
};