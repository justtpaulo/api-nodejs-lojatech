const pedidosModel = require("../models/pedidosModel");

const criarPedido = (req, res) => {
    const { idUsuario, idProduto, quantidade, valorTotal, situacao } = req.body;

    pedidosModel.criarPedido(idUsuario, idProduto, quantidade, valorTotal, situacao, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao criar um pedido." });
            throw err;
        } else {
            res.status(201).json({ message: "Pedido criado com sucesso." });
        }
    });
};

const obterPedidos = (req, res) => {
    pedidosModel.obterPedidos((err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter os pedidos." });
        } else {
            res.status(200).json(results);
        }
    });
};

const obterPedidoPorId = (req, res) => {
    const idPedido = req.params.idPedido;

    pedidosModel.obterPedidoPorId(idPedido, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter um pedido." });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Pedido não encontrado." });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const atualizarPedido = (req, res) => {
    const idPedido = req.params.idPedido;
    const { idUsuario, idProduto, quantidade, valorTotal, situacao } = req.body;

    pedidosModel.atualizarPedido(idPedido, idUsuario, idProduto, quantidade, valorTotal, situacao, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao atualizar o pedido." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Pedido não encontrado." });
        } else {
            res.status(200).json({ message: "Pedido atualizado com sucesso." });
        }
    });
};

const excluirPedido = (req, res) => {
    const idPedido = req.params.idPedido;

    pedidosModel.excluirPedido(idPedido, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao excluir o pedido." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Pedido não encontrado." });
        } else {
            res.status(200).json({ message: "Pedido excluído com sucesso." });
        }
    });
};

module.exports = {
    criarPedido,
    obterPedidos,
    obterPedidoPorId,
    atualizarPedido,
    excluirPedido,
};
