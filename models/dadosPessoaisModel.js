const db = require("../config/database");

const criarDados = (idUsuario, nome, sobrenome, telefone, callback) => {
    db.query("INSERT INTO dadosPessoais(idUsuario, nome, sobrenome, telefone) VALUES (?, ?, ?, ?)", [idUsuario, nome, sobrenome, telefone], callback);
};

const obterDados = (callback) => {
    db.query("SELECT * FROM dadosPessoais", callback);
};

const obterDadosPorId = (idUsuario, callback) => {
    db.query("SELECT * FROM dadosPessoais WHERE idUsuario = ?", [idUsuario], callback);
};

const atualizarDados = (idUsuario, nome, sobrenome, telefone, callback) => {
    db.query("UPDATE dadosPessoais SET nome = ?, sobrenome = ?, telefone = ? WHERE idUsuario = ?", [nome, sobrenome, telefone, idUsuario], callback);
};

const excluirDados = (idUsuario, callback) => {
    db.query("DELETE FROM dadosPessoais WHERE idUsuario = ?", [idUsuario], callback);
};

module.exports = {
    criarDados,
    obterDados,
    obterDadosPorId,
    atualizarDados,
    excluirDados,
};