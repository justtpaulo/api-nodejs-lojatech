const produtosModel = require("../models/produtosModel");

const criarProduto = (req, res) => {
    const { nome, valor } = req.body;

    produtosModel.criarProduto(nome, valor, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao criar produto." });
        } else {
            res.status(201).json({ message: "Produto criado com sucesso." });
        }
    });
};

const obterProdutos = (req, res) => {
    produtosModel.obterProdutos((err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter produtos." });
        } else {
            res.status(200).json(results);
        }
    });
};

const obterProdutoPorId = (req, res) => {
    const idProduto = req.params.idProduto;

    produtosModel.obterProdutoPorId(idProduto, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter produto." });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Produto não encontrado." });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const atualizarProduto = (req, res) => {
    const idProduto = req.params.idProduto;
    const { nome, valor } = req.body;

    produtosModel.atualizarProduto(idProduto, nome, valor, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao atualizar produto." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Produto não encontrado." });
        } else {
            res.status(200).json({ message: "Produto atualizado com sucesso." });
        }
    });
};

const excluirProduto = (req, res) => {
    const idProduto = req.params.idProduto;

    produtosModel.excluirProduto(idProduto, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao excluir produto." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Produto não encontrado." });
        } else {
            res.status(200).json({ message: "Produto excluído com sucesso." });
        }
    });
};

module.exports = {
    criarProduto,
    obterProdutos,
    obterProdutoPorId,
    atualizarProduto,
    excluirProduto,
};
