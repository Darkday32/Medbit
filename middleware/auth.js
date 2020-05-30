const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/keys_dev').secretOrKey;

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('Authorization');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  if (token) {
   res.status(401).json({ msg: 'Success' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    console.log(req.user)
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
