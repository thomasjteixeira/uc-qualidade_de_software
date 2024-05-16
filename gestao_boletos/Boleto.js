class Boleto {
  static currentId = 1;

  constructor(valor, dataVencimento, conta) {
    if (!conta) {
      throw new Error('Boleto deve estar associado a uma conta.');
    }

    this.id = Boleto.currentId++;
    this.valor = valor;
    this.dataVencimento = dataVencimento;
    this.conta = conta;
    this.pago = false;
  }

  pagar() {
    if (this.pago) {
      throw new Error('Este boleto já foi pago.');
    } else {
      this.conta.creditar(this.valor);
      this.pago = true;
      console.log(`Boleto no valor de R$${this.valor} pago com sucesso na conta ${this.conta.id}.`);
    }
  }

  cancelar() {
    if (this.pago) {
      throw new Error('Não é possível cancelar um boleto já pago.');
    } else {
      console.log('Boleto cancelado com sucesso.');
    }
  }

  // Método estático que busca um boleto por ID
  static buscarPorId(contas, boletoId) {
    return contas.flatMap(c => c.boletos).find(b => b.id == boletoId);
  }

  // Método toJSON que será chamado quando o objeto for serializado para JSON
  // A serialização é o processo de transformar um objeto em uma string que pode ser armazenada ou transmitida.
  // No caso de JavaScript, a serialização geralmente se refere à conversão de um objeto JavaScript em uma string JSON.
  // Este método controla como o objeto é serializado, retornando um novo objeto que contém apenas as propriedades que queremos incluir na string JSON.
  toJSON() {
    // Retorna um novo objeto contendo apenas as propriedades que queremos incluir na string JSON
    return {
      id: this.id,
      valor: this.valor,
      dataVencimento: this.dataVencimento,
      pago: this.pago,
      contaId: this.conta.id
    };
  }
}

module.exports = Boleto;
