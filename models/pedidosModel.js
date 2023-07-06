const db = require("../config/database");

const criarPedido = (idUsuario, idProduto, quantidade, valorTotal, situacao, callback) => {
    db.query("INSERT INTO pedidos(idUsuario, idProduto, quantidade, valorTotal, situacao) VALUES (?, ?, ?, ?, ?)", [idUsuario, idProduto, quantidade, valorTotal, situacao], callback);
};

const obterPedidos = (callback) => {
    db.query("SELECT * FROM pedidos", callback);
};

const obterPedidoPorId = (idPedido, callback) => {
    db.query("SELECT * FROM pedidos WHERE idPedido = ?", [idPedido], callback);
};

const atualizarPedido = (idPedido, idUsuario, idProduto, quantidade, valorTotal, situacao, callback) => {
    db.query("UPDATE pedidos SET idUsuario = ?, idProduto = ?, quantidade = ?, valorTotal = ?, situacao = ? WHERE idPedido = ?", [idUsuario, idProduto, quantidade, valorTotal, situacao, idPedido], callback);
};

const excluirPedido = (idPedido, callback) => {
    db.query("DELETE FROM pedidos WHERE idPedido = ?", [idPedido], callback);
};

module.exports = {
    criarPedido,
    obterPedidos,
    obterPedidoPorId,
    atualizarPedido,
    excluirPedido,
};