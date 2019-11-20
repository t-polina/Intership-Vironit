const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = function parsingToken(token) {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    return user._id;
}