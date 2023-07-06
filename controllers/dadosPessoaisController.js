const dadosPessoaisModel = require("../models/dadosPessoaisModel");

const criarDados = (req, res) => {
    const { idUsuario, nome, sobrenome, telefone } = req.body;

    dadosPessoaisModel.criarDados(idUsuario, nome, sobrenome, telefone, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erro ao criar usuário." });
        } else {
            res.status(201).json({ message: "Usuário criado com sucesso." });
        }
    });
};

const obterDados = (req, res) => {
    dadosPessoaisModel.obterDados((err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter usuários." });
        } else {
            res.status(200).json(results);
        }
    });
};

const obterDadosPorId = (req, res) => {
    const idUsuario = req.params.idUsuario;

    dadosPessoaisModel.obterDadosPorId(idUsuario, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter usuário." });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Usuário não encontrado." });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const atualizarDados = (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { nome, sobrenome, telefone, } = req.body;

    dadosPessoaisModel.atualizarDados(idUsuario, nome, sobrenome, telefone, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao atualizar usuário." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Usuário não encontrado." });
        } else {
            res.status(200).json({ message: "Usuário atualizado com sucesso." });
        }
    });
};

const excluirDados = (req, res) => {
    const idUsuario = req.params.idUsuario;

    dadosPessoaisModel.excluirDados(idUsuario, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao excluir usuário." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Usuário não encontrado." });
        } else {
            res.status(200).json({ message: "Usuário excluído com sucesso." });
        }
    });
};

module.exports = {
    criarDados,
    obterDados,
    obterDadosPorId,
    atualizarDados,
    excluirDados,
};
