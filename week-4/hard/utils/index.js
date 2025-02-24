const crypto = require('crypto');

const validatePassword = (password, originalHash, originalSalt) => {
  const hash = crypto
    .pbkdf2Sync(password, originalSalt, 1000, 64, `sha512`)
    .toString(`hex`);
  return originalHash === hash;
};

const hashPassword = function (password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
    return { salt, hash}
};

module.exports = { validatePassword, hashPassword}