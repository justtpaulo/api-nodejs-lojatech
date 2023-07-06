const db = require("../config/database");

const criarProduto = (nome, valor, callback) => {
    db.query("INSERT INTO produtos(nome, valor) VALUES (?, ?)", [nome, valor], callback);
};

const obterProdutos = (callback) => {
    db.query("SELECT * FROM produtos", callback);
};

const obterProdutoPorId = (idProduto, callback) => {
    db.query("SELECT * FROM produtos WHERE idProduto = ?", [idProduto], callback);
};

const atualizarProduto = (idProduto, nome, valor, callback) => {
    db.query("UPDATE produtos SET nome = ?, valor = ? WHERE idProduto = ?", [nome, valor, idProduto], callback);
};

const excluirProduto = (idProduto, callback) => {
    db.query("DELETE FROM produtos WHERE idProduto = ?", [idProduto], callback);
};

module.exports = {
    criarProduto,
    obterProdutos,
    obterProdutoPorId,
    atualizarProduto,
    excluirProduto,
};