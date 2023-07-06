const express = require("express");
const router = express.Router();

const enderecosController = require("../controllers/enderecosController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, enderecosController.criarEndereco);
router.get("/", authMiddleware, enderecosController.obterEnderecos);
router.get("/:idUsuario", authMiddleware, enderecosController.obterEnderecoPorId);
router.put("/:idUsuario", authMiddleware, enderecosController.atualizarEndereco);
router.delete("/:idUsuario", authMiddleware, enderecosController.excluirEndereco);

module.exports = router;