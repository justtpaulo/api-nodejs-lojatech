const db = require("../config/database");

const criarEndereco = (idUsuario, logradouro, bairro, cidade, cep, callback) => {
    db.query("INSERT INTO enderecos(idUsuario, logradouro, bairro, cidade, cep) VALUES (?, ?, ?, ?, ?)", [idUsuario, logradouro, bairro, cidade, cep], callback);
};

const obterEnderecos = (callback) => {
    db.query("SELECT * FROM enderecos", callback);
};

const obterEnderecoPorId = (idUsuario, callback) => {
    db.query("SELECT * FROM enderecos WHERE idUsuario = ?", [idUsuario], callback);
};

const atualizarEndereco = (idUsuario, logradouro, bairro, cidade, cep, callback) => {
    db.query("UPDATE enderecos SET logradouro = ?, bairro = ?, cidade = ?, cep = ? WHERE idUsuario = ?", [logradouro, bairro, cidade, cep, idUsuario], callback);
};

const excluirEndereco = (idUsuario, callback) => {
    db.query("DELETE FROM enderecos WHERE idUsuario = ?", [idUsuario], callback);
};

module.exports = {
    criarEndereco,
    obterEnderecos,
    obterEnderecoPorId,
    atualizarEndereco,
    excluirEndereco,
};