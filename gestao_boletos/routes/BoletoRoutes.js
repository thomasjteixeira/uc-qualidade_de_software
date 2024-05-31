const express = require('express');
const router = express.Router();
const BoletoController  = require('../controllers/BoletoController');

router.post('/boletos/:boletoId/pagar', BoletoController.pagarBoleto);
router.post('/boletos/:boletoId/cancelar', BoletoController.cancelarBoleto);
router.get('/boletos', BoletoController.listarBoletos);

module.exports = router;
