const express = require("express");
const router = express.Router();

const dadosPessoaisController = require("../controllers/dadosPessoaisController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, dadosPessoaisController.criarDados);
router.get("/", authMiddleware, dadosPessoaisController.obterDados);
router.get("/:idUsuario", authMiddleware, dadosPessoaisController.obterDadosPorId);
router.put("/:idUsuario", authMiddleware, dadosPessoaisController.atualizarDados);
router.delete("/:idUsuario", authMiddleware, dadosPessoaisController.excluirDados);

module.exports = router;