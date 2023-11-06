const { userService } = require('../services');
const mapHTTP = require('../utils/mapHTTP');

const newUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { status, data } = await userService.createrUser(displayName, email, password, image);

  return res.status(mapHTTP[status]).json(data);
};

module.exports = {
  newUser,
};