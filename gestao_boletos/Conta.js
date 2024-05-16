const Banco = {
  BANCO_DO_BRASIL: 'Banco do Brasil',
  CAIXA_ECONOMICA: 'Caixa Econômica',
  ITAU: 'Itaú',
  BRADESCO: 'Bradesco',
  SANTANDER: 'Santander'
};

class Conta {
  static currentId = 1;

  constructor(saldo, numeroConta, nomeBanco) {
    if (!Object.keys(Banco).includes(nomeBanco)) {
      throw new Error('Banco inválido');
    }

    this.id = Conta.currentId++;
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

  // Método toJSON que será chamado quando o objeto for serializado para JSON
  // A serialização é o processo de transformar um objeto em uma string que pode ser armazenada ou transmitida.
  // No caso de JavaScript, a serialização geralmente se refere à conversão de um objeto JavaScript em uma string JSON.
  // Este método controla como o objeto é serializado, retornando um novo objeto que contém apenas as propriedades que queremos incluir na string JSON.
  toJSON() {
    // Retorna um novo objeto contendo apenas as propriedades que queremos incluir na string JSON
    return {
      id: this.id,
      saldo: this.saldo,
      numeroConta: this.numeroConta,
      nomeBanco: this.nomeBanco,
      boletos: this.boletos.map(boleto => ({
        id: boleto.id,
        valor: boleto.valor,
        dataVencimento: boleto.dataVencimento,
        pago: boleto.pago
      }))
    };
  }
}

module.exports = Conta;
