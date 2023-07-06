const db = require("../config/database");

const criarUsuario = (email, senha, callback) => {
    db.query("INSERT INTO usuarios(email, senha) VALUES (?, ?)", [email, senha], callback);
};

const obterUsuarios = (callback) => {
    db.query("SELECT * FROM usuarios", callback);
};

const obterUsuarioPorId = (idUsuario, callback) => {
    db.query("SELECT * FROM usuarios WHERE idUsuario = ?", [idUsuario], callback);
};

const atualizarUsuario = (idUsuario, email, senha, callback) => {
    db.query("UPDATE usuarios SET email = ?, senha = ? WHERE idUsuario = ?", [email, senha, idUsuario], callback);
};

const excluirUsuario = (idUsuario, callback) => {
    db.query("DELETE FROM usuarios WHERE idUsuario = ?", [idUsuario], callback);
};

module.exports = {
    criarUsuario,
    obterUsuarios,
    obterUsuarioPorId,
    atualizarUsuario,
    excluirUsuario,
};