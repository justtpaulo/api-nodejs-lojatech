const enderecosModel = require("../models/enderecosModel");

const criarEndereco = (req, res) => {
    const { idUsuario, logradouro, bairro, cidade, cep } = req.body;

    enderecosModel.criarEndereco(idUsuario, logradouro, bairro, cidade, cep, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao criar um endereço." });
        } else {
            res.status(201).json({ message: "Endereço criado com sucesso." });
        }
    });
};

const obterEnderecos = (req, res) => {
    enderecosModel.obterEnderecos((err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter endereços." });
        } else {
            res.status(200).json(results);
        }
    });
};

const obterEnderecoPorId = (req, res) => {
    const idUsuario = req.params.idUsuario;

    enderecosModel.obterEnderecoPorId(idUsuario, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter um endereço." });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Endereço não encontrado." });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const atualizarEndereco = (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { logradouro, bairro, cidade, cep } = req.body;

    enderecosModel.atualizarEndereco(idUsuario, logradouro, bairro, cidade, cep, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao atualizar o endereço." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Endereço não encontrado." });
        } else {
            res.status(200).json({ message: "Endereço atualizado com sucesso." });
        }
    });
};

const excluirEndereco = (req, res) => {
    const idUsuario = req.params.idUsuario;

    enderecosModel.excluirEndereco(idUsuario, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao excluir o endereço." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Endereço não encontrado." });
        } else {
            res.status(200).json({ message: "Endereço excluído com sucesso." });
        }
    });
};

module.exports = {
    criarEndereco,
    obterEnderecos,
    obterEnderecoPorId,
    atualizarEndereco,
    excluirEndereco,
};