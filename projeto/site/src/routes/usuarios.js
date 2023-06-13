var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/posts", function (req, res) {
    usuarioController.posts(req, res);
});

router.get("/qtdPostagens/:idUsuario", function (req, res) {
    usuarioController.qtdPostagens(req, res);
});

router.get("/começarOQuiz:idUsuario", function (req, res) {
    usuarioController.começarOQuiz(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/inserirPontuacao", function (req, res) {
    usuarioController.inserirPontuacao(req, res);
});

router.post("/exibirDados", function (req, res) {
    usuarioController.exibirDados(req, res);
});

router.post("/postar", function (req, res) {
    usuarioController.postar(req, res);
})

module.exports = router;