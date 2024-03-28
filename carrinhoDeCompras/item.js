class Item {
  constructor(nome, valor, quantidade) {
    this.nome = nome;
    this.valor = valor;
    this.quantidade = quantidade;
  }

  somaTotalItens() {
    return this.quantidade * this.valor;
  }
}

module.exports = Item;
