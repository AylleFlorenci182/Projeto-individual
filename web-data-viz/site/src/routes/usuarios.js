var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/dadosGrafico", function (req, res) {
    usuarioController.cadastrar(req, res);
})
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/registrar", function (req, res) {
    usuarioController.registrar(req, res);
});

router.post("/pegarPontuacao", function (req, res) {
    usuarioController.pegarPontuacao(req, res);
});

module.exports = router;