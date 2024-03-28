const Item = require('../item.js');

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Mouse', 15, 10);

    expect(item.nome).toBe('Mouse');
    expect(item.valor).toBe(15);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item = new Item('Mouse', 15, 10);

    expect(item.somaTotalItens()).toBeCloseTo(150);
  });
});
