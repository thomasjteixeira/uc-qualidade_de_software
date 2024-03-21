const Carrinho = require('./carrinho.js');
const Item = require('./item.js');

const carrinho = new Carrinho();

carrinho.adiciona(new Item('Teclado', 25, 3));
carrinho.adiciona(new Item('Mouse', 15.5, 5));
carrinho.adiciona(new Item('Clipe', 0.1, 1));
carrinho.adiciona(new Item('Pasta', 0.25, 2));
carrinho.adiciona(new Item('Computador', 1700, 1));

carrinho.adicionaFrete(15);

carrinho.calculaTotal();

carrinho.finalizaCompra();

console.log(carrinho);
