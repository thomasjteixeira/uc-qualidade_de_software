const Carrinho = require('../carrinho.js');
const Item = require('../item.js');

describe('Testes do carrinho com Sucesso', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const item = new Item('Mouse', 15, 5);
    const item2 = new Item('Borracha', 0.5, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);

    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);
  });

  it('Deve ter a propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });

  it('Deve ter a propriedade "frete" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('frete');
  });

  it('Deve adicionar frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(15);

    expect(carrinho.frete).toBe(15);
  });

  it('Deve calcular o total', () => {
    const item = new Item('Mouse', 15, 5);
    const item2 = new Item('Borracha', 0.5, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(15);

    expect(carrinho.calculaTotal()).toBeCloseTo(91);
  });

  it('Deve finalizar a compra', () => {
    const item = new Item('Mouse', 15, 5);
    const item2 = new Item('Borracha', 0.5, 2);

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    carrinho.adicionaFrete(15);

    carrinho.finalizaCompra();

    expect(carrinho.total).toBeCloseTo(91);
  });
});

describe('Testes do carrinho com Falha', () => {
  it('Deve retornar erro ao finalizar compra com carrinho vazio', () => {
    const carrinho = new Carrinho();

    expect(() => carrinho.finalizaCompra()).toThrowError('Carrinho de compras vazio');
  });
});
