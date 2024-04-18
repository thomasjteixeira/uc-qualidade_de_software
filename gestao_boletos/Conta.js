const Banco = {
  BANCO_DO_BRASIL: 'Banco do Brasil',
  CAIXA_ECONOMICA: 'Caixa Econômica',
  ITAU: 'Itaú',
  BRADESCO: 'Bradesco',
  SANTANDER: 'Santander'
};

class Conta {
  constructor(id, saldo, numeroConta, nomeBanco) {

    if (!Object.keys(Banco).includes(nomeBanco)) {
      throw new Error('Banco inválido');
    }

    this.id = id;
    this.saldo = saldo;
    this.numeroConta = numeroConta;
    this.nomeBanco = Banco[nomeBanco];
    this.boletos = [];
  }

  creditar(valor) {
    this.saldo += valor;
    console.log(`--> Foram creditados R$${valor} na conta ${this.id}. Saldo atual: R$${this.saldo}`);
  }

  adicionarBoleto(boleto) {
    this.boletos.push(boleto);
  }

  imprimirSaldo() {
    console.log(`-----------------------------------------`);
    console.log(`Número da conta: ${this.numeroConta}`);
    console.log(`Banco: ${this.nomeBanco}`);
    console.log(`Quantidade de boletos: ${this.boletos.length}`);
    console.log(`Saldo: R$${this.saldo}`);
    console.log(`-----------------------------------------`);
  }
}

module.exports = Conta;
