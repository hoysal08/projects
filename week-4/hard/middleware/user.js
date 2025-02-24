const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  const token = req.get("token");
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  if (decodedData) {
    req.userId = decodedData.id;
    next();
  }
}

module.exports = userMiddleware;