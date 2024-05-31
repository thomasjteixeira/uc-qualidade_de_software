const Boleto = require('../models/Boleto');

let contas = [];

const pagarBoleto = (req, res) => {
  const { boletoId } = req.params;
  try {
    const boleto = Boleto.buscarPorId(contas, boletoId);

    if (boleto) {
      if (!boleto.pago) {
        boleto.pagar();
        res.status(200).send({ message: `Boleto no valor de R$${boleto.valor} pago com sucesso!`, boleto });
      } else {
        res.status(400).send({ message: 'Este boleto já foi pago.' });
      }
    } else {
      res.status(404).send({ message: 'Boleto não encontrado' });
    }
  } catch (error) {
    console.error('Error in pagarBoleto:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const cancelarBoleto = (req, res) => {
  const { boletoId } = req.params;
  try {
    const boleto = Boleto.buscarPorId(contas, boletoId);

    if (boleto) {
      if (!boleto.pago) {
        boleto.cancelar();
        res.status(200).send({ message: 'Boleto cancelado com sucesso!', boleto });
      } else {
        res.status(400).send({ message: 'Não é possível cancelar um boleto já pago.' });
      }
    } else {
      res.status(404).send({ message: 'Boleto não encontrado' });
    }
  } catch (error) {
    console.error('Error in cancelarBoleto:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const listarBoletos = (req, res) => {
  try {
    const boletos = contas.flatMap(conta => conta.boletos);
    res.status(200).send(boletos);
  } catch (error) {
    console.error('Error in listarBoletos:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

const BoletoController = {
  pagarBoleto,
  cancelarBoleto,
  listarBoletos,
};

module.exports = BoletoController;
