const Conta = require('../models/Conta');
const Boleto = require('../models/Boleto');

let contas = [];

const criarConta = (req, res) => {
  const { saldo, numeroConta, nomeBanco } = req.body;
  try {
    const conta = new Conta(saldo, numeroConta, nomeBanco);
    contas.push(conta);
    res.status(201).send({ message: 'Conta criada com sucesso!', conta });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const listarContas = (req, res) => {
  res.status(200).send(contas);
};

const criarBoleto = (req, res) => {
  const { contaId } = req.params;
  const { valor, dataVencimento } = req.body;
  const conta = contas.find(c => c.id == contaId);

  if (conta) {
    try {
      const boleto = new Boleto(valor, dataVencimento, conta);
      conta.adicionarBoleto(boleto);
      res.status(201).send({ message: 'Boleto criado com sucesso!', boleto });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  } else {
    res.status(404).send({ message: 'Conta não encontrada' });
  }
};

const ContaController = {
  criarConta,
  listarContas,
  criarBoleto,
};

module.exports = ContaController;
