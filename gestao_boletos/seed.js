const Boleto = require('./Boleto');
const Conta = require('./Conta');

const contas = [];

function seed() {
  // Cria uma conta
  const conta1 = new Conta(1000, '12345-6', 'ITAU');
  const conta2 = new Conta(2000, '65432-1', 'BRADESCO');

  // Adiciona boletos à conta 1
  const boleto1 = new Boleto(500, '2024-06-01', conta1);
  const boleto2 = new Boleto(300, '2024-06-15', conta1);

  conta1.adicionarBoleto(boleto1);
  conta1.adicionarBoleto(boleto2);

  // Adiciona boletos à conta 2
  const boleto3 = new Boleto(1000, '2024-07-01', conta2);

  conta2.adicionarBoleto(boleto3);

  // Adiciona contas ao array de contas
  contas.push(conta1);
  contas.push(conta2);
}

seed();

module.exports = contas;
