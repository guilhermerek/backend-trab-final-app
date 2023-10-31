//Rotas da API
const express = require("express");
const router = express.Router();

const AlunoController = require("./controllers/AlunoController");

router.get("/ping", AlunoController.ping);

router.get("/alunos", AlunoController.all);
router.get("/aluno/:id", AlunoController.one);
router.post("/alunos", AlunoController.new);
router.put("/alunos/:id", AlunoController.edit);
router.delete('/aluno/:id', AlunoController.delete);

module.exports = router;