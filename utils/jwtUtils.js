const jwt = require('jsonwebtoken');

function gerarToken(payload) {
    const token = jwt.sign(payload, "JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");

    return token;
}

module.exports = gerarToken;