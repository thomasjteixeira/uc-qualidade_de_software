const comparaNumeros = require('../comparaNumeros'); 

// Testes para casos positivos
describe('comparaNumeros - Casos Positivos', () => {
  it('deve retornar verdadeiro para dois números iguais', () => {
    expect(comparaNumeros(5, 5)).toBeTruthy();
  });
  it('deve retornar verdadeiro para dois números negativos iguais', () => {
    expect(comparaNumeros(-3, -3)).toBeTruthy();
  });
  it('deve retornar verdadeiro para zero', () => {
    expect(comparaNumeros(0, 0)).toBeTruthy();
  });
});

// Testes para casos negativos
describe('comparaNumeros - Casos Negativos', () => {
  it('deve retornar falso para números diferentes', () => {
    expect(comparaNumeros(5, 3)).toBeFalsy();
  });

  it('deve retornar falso para comparação de tipos diferentes', () => {
    expect(comparaNumeros(1, '1')).toBeFalsy();
  });

  it('deve retornar falso para números com diferença de sinal', () => {
    expect(comparaNumeros(-1, 1)).toBeFalsy();
  });
});
