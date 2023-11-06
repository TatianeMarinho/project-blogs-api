const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || '1234';

const authenticate = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  console.log(req.headers);
  console.log(bearerToken);

  if (!bearerToken || bearerToken === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const token = bearerToken.split(' ')[1];
    console.log('token', token);
    const user = jwt.verify(token, SECRET_KEY);
    console.log(user);
    req.User = user;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = authenticate;