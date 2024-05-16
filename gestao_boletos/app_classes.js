const Conta = require('./Conta');
const Boleto = require('./Boleto');

let conta = new Conta(1000, '12345', 'BANCO_DO_BRASIL');
let boleto1 = new Boleto(200, '2023-12-31', conta);
let boleto2 = new Boleto(300, '2024-01-15', conta);

conta.adicionarBoleto(boleto1);
conta.adicionarBoleto(boleto2);

console.log('Saldo inicial:', conta.saldo);
boleto1.pagar();
boleto2.pagar();

try {
  // Criar e tentar cancelar um boleto não pago
  let boleto3 = new Boleto(400, '2024-02-28', conta);
  conta.adicionarBoleto(boleto3);
  boleto3.cancelar();
} catch (error) {
  console.error(error.message);
}

conta.imprimirSaldo();

try {
  // Tentar cancelar um boleto já pago
  boleto1.cancelar();
} catch (error) {
  console.error(error.message);
}

try {
  // Tentar pagar um boleto já pago
  boleto2.pagar();
} catch (error) {
  console.error(error.message);
}

conta.imprimirSaldo();
