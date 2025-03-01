const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
  const token = req.get("token");
  try {
    const decodedUser = jwt.verify(token, process.env.SECRET);
    if (!decodedUser) {
      return res.status(401).json({message: "Invalid Credentials"});
    }
    req.userId = decodedUser.userId;
    next();
  } catch (err) {
    return res.status(401).json({message: "Invalid Credentials"});
  }
};

module.exports = authenticateUser;
