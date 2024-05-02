class Boleto {
  constructor(valor, dataVencimento, conta) {
    this.valor = valor;
    this.dataVencimento = dataVencimento;
    this.conta = conta;
    this.pago = false;
    // this.status = 'ABERTO' || 'PAGO' || 'CANCELADO' || 'VENCIDO';
  }

  pagar() {
    if (!this.pago) {
      this.conta.creditar(this.valor);
      this.pago = true;
      console.log(`Boleto no valor de R$${this.valor} pago com sucesso na conta ${this.conta.id}.`);
    } else {
      console.log('Este boleto já foi pago.');
    }
  }

  cancelar() {
    if (!this.pago) {
      console.log('Boleto cancelado com sucesso.');
    } else {
      console.log('Não é possível cancelar um boleto já pago.');
    }
  }
}

module.exports = Boleto;
