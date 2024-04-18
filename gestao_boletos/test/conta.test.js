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

  test('Deve lançar um erro ao criar uma conta com um banco inválido', () => {
    expect(() => new Conta(1, 1000, '123456', 'BANCO_X')).toThrowError('Banco inválido');
  });

});
