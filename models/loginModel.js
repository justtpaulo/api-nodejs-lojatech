const db = require("../config/database");

const autenticarUsuario = (email, senha, callback) => {
    db.query("SELECT * FROM usuarios WHERE email = ? AND senha = ?", [email, senha], callback);
};

module.exports = {
    autenticarUsuario,
};