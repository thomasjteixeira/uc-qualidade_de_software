const express = require('express');
const router = express.Router();
const ContaController = require('../controllers/ContaController');

router.post('/contas', ContaController.criarConta);
router.get('/contas', ContaController.listarContas);
router.post('/:contaId/boletos', ContaController.criarBoleto);


module.exports = router;
