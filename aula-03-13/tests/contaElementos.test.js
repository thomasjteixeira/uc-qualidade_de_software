const contaElementos = require('../contaElementos');

// Testes para casos positivos
describe('A função contaElementos', () => {
  it('deve contar corretamente múltiplas ocorrências de um elemento no array', () => {
    expect(contaElementos([1, 2, 3, 2, 4, 2], 2)).toBe(3);
  });

  it('deve contar corretamente uma única ocorrência de um elemento no array', () => {
    expect(contaElementos([1, 2, 3, 4], 3)).toBe(1);
  });

  it('deve contar corretamente todas as ocorrências de um elemento em um array com elementos repetidos', () => {
    expect(contaElementos([5, 5, 5, 5], 5)).toBe(4);
  });
});

// Testes para casos negativos
describe('Quando não encontra o elemento buscado, a função contaElementos', () => {
  it('deve retornar 0 para um array vazio', () => {
    expect(contaElementos([], 1)).toBe(0);
  });

  it('deve retornar 0 se o elemento não estiver presente no array', () => {
    expect(contaElementos([1, 2, 3, 4], 5)).toBe(0);
  });
});
