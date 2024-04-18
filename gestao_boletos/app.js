// index.js
const Conta = require('./Conta.js');
const Boleto = require('./Boleto.js');

let conta = new Conta(1, 1000, '12345', 'BANCO_DO_BRASIL');
let boleto1 = new Boleto(200, '2023-12-31', conta);
let boleto2 = new Boleto(300, '2024-01-15', conta);

conta.adicionarBoleto(boleto1);
conta.adicionarBoleto(boleto2);

console.log('Saldo inicial:', conta.saldo);
boleto1.pagar();
boleto2.pagar();

// Criar e tentar cancelar um boleto não pago
let boleto3 = new Boleto(400, '2024-02-28', conta);
conta.adicionarBoleto(boleto3);
boleto3.cancelar();
console.log(conta.imprimirSaldo());
