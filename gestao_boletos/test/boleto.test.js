const Conta = require('../Conta.js');
const Boleto = require('../Boleto.js');

describe('Testes para a classe Boleto', () => {
  let conta;
  let boleto;

  beforeEach(() => {
    conta = new Conta(2000, '654321', 'ITAU');
    boleto = new Boleto(300, '2023-12-31', conta);
    conta.adicionarBoleto(boleto);
  });

  test('Deve pagar o boleto e creditar na conta', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    boleto.pagar();
    expect(boleto.pago).toBeTruthy();
    expect(conta.saldo).toEqual(2300);
    expect(consoleSpy).toHaveBeenCalledWith('Boleto no valor de R$300 pago com sucesso na conta 1.');
    consoleSpy.mockRestore();
  });

  test('Não deve pagar o boleto duas vezes', () => {
    boleto.pagar();
    const initialSaldo = conta.saldo;
    expect(() => boleto.pagar()).toThrow('Este boleto já foi pago.');
    expect(conta.saldo).toEqual(initialSaldo);
  });

  test('Deve cancelar o boleto não pago', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    expect(boleto.pago).toBeFalsy();
    boleto.cancelar();
    expect(boleto.pago).toBeFalsy();
    expect(consoleSpy).toHaveBeenCalledWith('Boleto cancelado com sucesso.');
    consoleSpy.mockRestore();
  });

  test('Não deve cancelar o boleto pago', () => {
    boleto.pagar();
    expect(() => boleto.cancelar()).toThrow('Não é possível cancelar um boleto já pago.');
    expect(boleto.pago).toBeTruthy();
  });

  test('Deve buscar um boleto por ID', () => {
    const contas = [conta];
    const foundBoleto = Boleto.buscarPorId(contas, boleto.id);
    expect(foundBoleto).toBe(boleto);
  });

  test('Deve serializar corretamente para JSON', () => {
    const json = boleto.toJSON();
    expect(json).toEqual({
      id: boleto.id,
      valor: boleto.valor,
      dataVencimento: boleto.dataVencimento,
      pago: boleto.pago,
      contaId: conta.id
    });
  });
});
