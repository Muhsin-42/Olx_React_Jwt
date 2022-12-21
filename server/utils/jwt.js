const jwt = require("jsonwebtoken");
const maxAge = 3 * 24 * 60 * 60;
const key = "myWebAppSecretKey123";
// const adminToken = jwt.sign({ username: admin.username, email: admin.email }, 'myWebAppSecretKey123',{expiresIn:maxAge})

const createToken = (username, email) => {
  jwt.sign({ username: username, email: email }, key, { expiresIn: maxAge });
};

module.exports = createToken;
