const { loginService } = require('../services');
const mapHttp = require('../utils/mapHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;
  
  const { status, data } = await loginService.execute(email, password);
  return res.status(mapHttp(status)).json(data);
};

module.exports = {
  login,
};