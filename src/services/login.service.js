const { User } = require('../models');
const generateToken = require('../utils/token');

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