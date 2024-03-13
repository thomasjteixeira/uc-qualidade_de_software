const soma = require('../soma'); // Importa a função soma

// Testes para casos positivos
describe('A função soma', () => {
  it('deve somar corretamente dois números positivos', () => {
    expect(soma(5, 3)).toBe(8);
  });

  it('deve somar corretamente dois números negativos', () => {
    expect(soma(-4, -6)).toBe(-10);
  });

  it('deve somar corretamente um número positivo e zero', () => {
    expect(soma(0, 5)).toBe(5);
  });

  it('deve somar corretamente um número negativo e zero', () => {
    expect(soma(-3, 0)).toBe(-3);
  });
});

// Testes para casos negativos
describe('Quando argumentos não numéricos são fornecidos, a função soma', () => {
  it('deve retornar null se o primeiro argumento não for um número', () => {
    expect(soma('a', 1)).toBeNull();
  });

  it('deve retornar null se o segundo argumento não for um número', () => {
    expect(soma(1, 'b')).toBeNull();
  });

  it('deve retornar null se ambos os argumentos não forem números', () => {
    expect(soma('a', 'b')).toBeNull();
  });
});
