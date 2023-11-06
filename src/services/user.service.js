const { User } = require('../models');
const generateToken = require('../utils/token');

const createrUser = async (body) => {
  const { email, password, displayName, image } = body;

  const findUser = await User.findOne({
    where: { email },
  });

  if (findUser !== null) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken({ id: newUser.id, displayName, email, image });

  return { status: 'CREATED', data: { token } };
};

const getAllUsers = async () => {
  const listUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 'SUCCESSFUL', data: listUsers };
};

module.exports = {
  createrUser,
  getAllUsers,
};