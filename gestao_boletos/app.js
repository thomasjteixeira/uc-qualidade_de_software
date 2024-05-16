const express = require('express');
const Boleto = require('./Boleto');
const Conta = require('./Conta');
const seedContas = require('./seed');  // Importar contas do seed.js

const app = express();
const port = 3000;

app.use(express.json());

// Seeds são dados iniciais que são carregados no banco de dados durante o desenvolvimento ou testes.
// Eles são úteis para preencher o banco de dados com dados de exemplo para testar a aplicação durante o desenvolvimento.
// Como não temos o banco de dados ainda, vamos usar um array de contas e boletos que está no arquivo seed.js
const contas = seedContas; 

// Criar uma nova conta
app.post('/contas', (req, res) => {
  const { saldo, numeroConta, nomeBanco } = req.body;
  try {
    const conta = new Conta(saldo, numeroConta, nomeBanco);
    contas.push(conta);
    res.status(201).send({ message: 'Conta criada com sucesso!', conta });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

// Listar todas as contas com seus boletos
app.get('/contas', (req, res) => {
  res.status(200).send(contas);
});

// Criar um novo boleto
// ':contaId' na URL é um parâmetro de rota. Ele é usado para identificar uma conta específica.
// Quando uma solicitação é feita para uma URL como '/123/boletos', '123' será o valor de 'contaId'.
// Esse valor pode ser acessado no objeto 'req.params'.
app.post('/:contaId/boletos', (req, res) => {
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
});

// Pagar um boleto
app.post('/boletos/:boletoId/pagar', (req, res) => {
  const { boletoId } = req.params;
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
});

// Cancelar um boleto
app.post('/boletos/:boletoId/cancelar', (req, res) => {
  const { boletoId } = req.params;
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
});

// Listar todos os boletos
app.get('/boletos', (req, res) => {
  const boletos = contas.flatMap(conta => conta.boletos);
  res.status(200).send(boletos);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
