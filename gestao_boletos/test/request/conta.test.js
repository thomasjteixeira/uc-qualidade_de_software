const request = require('supertest');
const app = require('../../app');

describe('API Tests - Contas', () => {
  let contaId;

  test('Criar uma nova conta com dados válidos', async () => {
    const response = await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_DO_BRASIL'
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Conta criada com sucesso!');
    expect(response.body.conta.saldo).toBe(1000);
    expect(response.body.conta.numeroConta).toBe('12345-6');
    expect(response.body.conta.nomeBanco).toBe('Banco do Brasil');
    contaId = response.body.conta.id;
  });

  test('Criar uma nova conta com banco inválido', async () => {
    const response = await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_INVALIDO'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Banco inválido');
  });

  test('Listar todas as contas', async () => {
    // Cria uma conta para garantir que haja pelo menos uma conta na lista
    await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_DO_BRASIL'
      });

    const response = await request(app).get('/contas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Adicionar um boleto a uma conta', async () => {
    // Cria uma conta para adicionar um boleto
    const contaResponse = await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_DO_BRASIL'
      });

    contaId = contaResponse.body.conta.id;

    const response = await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        valor: 500,
        dataVencimento: '2024-06-01'
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Boleto criado com sucesso!');
    expect(response.body.boleto.valor).toBe(500);
    expect(response.body.boleto.dataVencimento).toBe('2024-06-01');
  });

  test('Verificar saldo e boletos da conta', async () => {
    // Cria uma conta e adiciona um boleto para verificar o saldo e os boletos
    const contaResponse = await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_DO_BRASIL'
      });

    contaId = contaResponse.body.conta.id;

    await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        valor: 500,
        dataVencimento: '2024-06-01'
      });

    const response = await request(app).get('/contas');
    const conta = response.body.find(c => c.id === contaId);

    expect(conta).toBeDefined();
    expect(conta.saldo).toBe(1000);
    expect(conta.boletos.length).toBe(1);
    expect(conta.boletos[0].valor).toBe(500);
  });
});
