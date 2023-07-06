const usuariosModel = require("../models/usuariosModel");

const criarUsuario = (req, res) => {
    const { email, senha } = req.body;

    usuariosModel.criarUsuario(email, senha, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao criar usuário." });
        } else {
            res.status(201).json({ message: "Usuário criado com sucesso." });
        }
    });
};

const obterUsuarios = (req, res) => {
    usuariosModel.obterUsuarios((err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter usuários." });
        } else {
            res.status(200).json(results);
        }
    });
};

const obterUsuarioPorId = (req, res) => {
    const idUsuario = req.params.idUsuario;

    usuariosModel.obterUsuarioPorId(idUsuario, (err, results) => {
        if (err) {
            res.status(500).json({ error: "Erro ao obter usuário." });
        } else if (results.length === 0) {
            res.status(404).json({ error: "Usuário não encontrado." });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

const atualizarUsuario = (req, res) => {
    const idUsuario = req.params.idUsuario;
    const { email, senha } = req.body;

    usuariosModel.atualizarUsuario(idUsuario, email, senha, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Erro ao atualizar usuário." });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Usuário não encontrado." });
        } else {
            res.status(200).json({ message: "Usuário atualizado com sucesso." });
        }
    });
};

const excluirUsuario = (req, res) => {
    const idUsuario = req.params.idUsuario;

    usuariosModel.excluirUsuario(idUsuario, (err, result) => {
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
    criarUsuario,
    obterUsuarios,
    obterUsuarioPorId,
    atualizarUsuario,
    excluirUsuario,
};
