const Conta = require('../Conta.js');
const Boleto = require('../Boleto.js');

describe('Testes para a classe Conta', () => {
  let conta;

  beforeEach(() => {
    conta = new Conta(1000, '123456', 'BANCO_DO_BRASIL');
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
    expect(() => new Conta(1000, '123456', 'BANCO_X')).toThrowError('Banco inválido');
  });

  test('Deve serializar corretamente para JSON', () => {
    const boleto = new Boleto(200, '2023-12-31', conta);
    conta.adicionarBoleto(boleto);
    const json = conta.toJSON();
    expect(json).toEqual({
      id: conta.id,
      saldo: conta.saldo,
      numeroConta: conta.numeroConta,
      nomeBanco: conta.nomeBanco,
      boletos: [
        {
          id: boleto.id,
          valor: boleto.valor,
          dataVencimento: boleto.dataVencimento,
          pago: boleto.pago
        }
      ]
    });
  });

  test('Deve iniciar com ID único e sequencial', () => {
    const conta2 = new Conta(2000, '654321', 'ITAU');
    expect(conta2.id).toEqual(conta.id + 1);
  });

  test('Deve adicionar múltiplos boletos corretamente', () => {
    const boleto1 = new Boleto(200, '2023-12-31', conta);
    const boleto2 = new Boleto(300, '2024-01-15', conta);
    conta.adicionarBoleto(boleto1);
    conta.adicionarBoleto(boleto2);
    expect(conta.boletos.length).toEqual(2);
    expect(conta.boletos).toContain(boleto1);
    expect(conta.boletos).toContain(boleto2);
  });

  // Não é necessário, só para exemplificar como seria um teste para o método imprimirSaldo
  test('Deve imprimir saldo corretamente', () => {
    console.log = jest.fn();
    conta.imprimirSaldo();
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining(`Número da conta: ${conta.numeroConta}`));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining(`Banco: ${conta.nomeBanco}`));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining(`Quantidade de boletos: ${conta.boletos.length}`));
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining(`Saldo: R$${conta.saldo}`));
  });
});
