const express = require('express');
const { getPortabilidade } = require('../portabilidade/portabilidade.controller');
const router = express.Router()

router.put( '/topaz-inss/v7/emprestimos/excluir-portabilidade',getPortabilidade)


module.exports = router;