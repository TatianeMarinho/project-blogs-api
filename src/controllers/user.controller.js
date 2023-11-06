const { userService } = require('../services');
const mapHTTP = require('../utils/mapHTTP');

const newUser = async (req, res) => {
  const { body } = req;

  const { status, data } = await userService.createrUser(body);

  return res.status(mapHTTP(status)).json(data);
};

const getUsers = async (_req, res) => {
  const { status, data } = await userService.getAllUsers();

  return res.status(mapHTTP(status)).json(data);
};

module.exports = {
  newUser,
  getUsers,
};