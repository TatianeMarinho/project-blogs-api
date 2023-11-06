const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || '1234';

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

module.exports = generateToken;