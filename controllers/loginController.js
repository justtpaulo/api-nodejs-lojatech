const loginModel = require("../models/loginModel");
const gerarToken = require('../utils/jwtUtils');

const autenticarUsuario = (req, res) => {
    const { email, senha } = req.body;

    loginModel.autenticarUsuario(email, senha, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao verificar login." });
        } else {
            if (result.length > 0) {
                res.status(200).json({ token: gerarToken(result[0]) });
            } else {
                res.status(401).json({ message: "Credenciais inválidas."});
            }
        }
    });
};

module.exports = {
    autenticarUsuario,
};
