const express = require("express");
const router = express.Router();

const pedidosController = require("../controllers/pedidosController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, pedidosController.criarPedido);
router.get("/", authMiddleware, pedidosController.obterPedidos);
router.get("/:idPedido", authMiddleware, pedidosController.obterPedidoPorId);
router.put("/:idPedido", authMiddleware, pedidosController.atualizarPedido);
router.delete("/:idPedido", authMiddleware, pedidosController.excluirPedido);

module.exports = router;