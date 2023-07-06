const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ error: "Token de autenticação não fornecido" });
    }

    jwt.verify(token, "JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", (err, user) => {
        if (err) {
            return res.status(403).json({ error: "Token de autenticação inválido" });
        }

        req.user = user;
        next();
    });
};

