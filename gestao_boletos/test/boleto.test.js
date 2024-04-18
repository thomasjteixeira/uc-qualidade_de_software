const Conta = require('../Conta.js');
const Boleto = require('../Boleto.js');

describe('Testes para a classe Conta', () => {
  let conta;
  beforeEach(() => {
    conta = new Conta(1, 1000, '123456', 'BANCO_DO_BRASIL');
  });

  test('Deve creditar valor corretamente', () => {
    conta.creditar(500);
    expect(conta.saldo).toEqual(1500);
  });

  test('Deve adicionar boleto corretamente', () => {
    const boleto = new Boleto(200, '2023-12-31', conta);
    conta.adicionarBoleto(boleto);
    expect(conta.boletos.length).toEqual(1);
    expect(conta.boletos[0]).toBe(boleto);
  });
});

describe('Testes para a classe Boleto', () => {
  let conta;
  let boleto;

  beforeEach(() => {
    conta = new Conta(2, 2000, '654321', 'ITAU');
    boleto = new Boleto(300, '2023-12-31', conta);
  });

  test('Deve pagar o boleto e creditar na conta', () => {
    boleto.pagar();
    expect(boleto.pago).toBeTruthy();
    expect(conta.saldo).toEqual(2300);
  });

  test('Não deve pagar o boleto duas vezes', () => {
    boleto.pagar();
    const initialSaldo = conta.saldo;
    boleto.pagar();
    expect(conta.saldo).toEqual(initialSaldo);
  });

  test('Deve cancelar o boleto não pago', () => {
    expect(boleto.pago).toBeFalsy();
    boleto.cancelar();
    expect(boleto.pago).toBeFalsy();
  });

  test('Não deve cancelar o boleto pago', () => {
    boleto.pagar();
    boleto.cancelar();
    expect(boleto.pago).toBeTruthy();
  });

  // test('Deve mostrar uma mensagem de erro ao tentar pagar um boleto cancelado', () => {
  //   boleto.cancelar();
  //   expect(() => boleto.pagar()).toThrow('Não é possível pagar um boleto cancelado');
  // });
});
