const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rota para controle de usuario
router.get("/", userController.index);

module.exports = router;