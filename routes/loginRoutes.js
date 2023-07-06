const express = require("express");
const router = express.Router();

const loginController = require("../controllers/loginController");
const authMiddleware = require('../middleware/authMiddleware');

router.post("/", authMiddleware, loginController.autenticarUsuario);

module.exports = router;