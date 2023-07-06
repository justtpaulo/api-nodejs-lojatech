const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, usuariosController.criarUsuario);
router.get("/", authMiddleware, usuariosController.obterUsuarios);
router.get("/:idUsuario", authMiddleware, usuariosController.obterUsuarioPorId);
router.put("/:idUsuario", authMiddleware, usuariosController.atualizarUsuario);
router.delete("/:idUsuario", authMiddleware, usuariosController.excluirUsuario);

module.exports = router;