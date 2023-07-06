const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtosController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, produtosController.criarProduto);
router.get("/", authMiddleware, produtosController.obterProdutos);
router.get("/:idProduto", authMiddleware, produtosController.obterProdutoPorId);
router.put("/:idProduto", authMiddleware, produtosController.atualizarProduto);
router.delete("/:idProduto", authMiddleware, produtosController.excluirProduto);

module.exports = router;