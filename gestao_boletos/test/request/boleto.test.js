const request = require('supertest');
const app = require('../../app');

describe('API Tests - Boletos', () => {
  let contaId;
  let boletoId;

  beforeAll(async () => {
    // Criar uma conta para associar boletos
    const contaResponse = await request(app)
      .post('/contas')
      .send({
        saldo: 1000,
        numeroConta: '12345-6',
        nomeBanco: 'BANCO_DO_BRASIL'
      });

    contaId = contaResponse.body.conta.id;

    const boletoResponse = await request(app)
      .post(`/${contaId}/boletos`)
      .send({ valor: 200, dataVencimento: '2024-12-31' });
    boletoId = boletoResponse.body.boleto.id;
  });

  test('Criar um novo boleto', async () => {
    const response = await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        valor: 200,
        dataVencimento: '2024-12-31'
      });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Boleto criado com sucesso!');
    boletoId = response.body.boleto.id;
  });

  test('Criar um boleto sem valor deve falhar', async () => {
    const response = await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        dataVencimento: '2024-12-31'
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Valor do boleto é obrigatório.');
  });

  test('Criar um boleto sem data de vencimento deve falhar', async () => {
    const response = await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        valor: 200
      });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Data de vencimento do boleto é obrigatória.');
  });

  test('Pagar um boleto', async () => {
    const response = await request(app).post(`/boletos/${boletoId}/pagar`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe(`Boleto no valor de R$200 pago com sucesso!`);
  });

  test('Cancelar um boleto já pago deve falhar', async () => {
    const response = await request(app).post(`/boletos/${boletoId}/cancelar`);
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Não é possível cancelar um boleto já pago.');
  });

  test('Pagar um boleto inexistente deve falhar', async () => {
    const response = await request(app).post(`/boletos/99999/pagar`);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Boleto não encontrado');
  });

  test('Cancelar um boleto inexistente deve falhar', async () => {
    const response = await request(app).post(`/boletos/99999/cancelar`);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Boleto não encontrado');
  });

  test('Criar e cancelar um boleto não pago', async () => {
    const boletoResponse = await request(app)
      .post(`/${contaId}/boletos`)
      .send({
        valor: 100,
        dataVencimento: '2024-12-31'
      });

    const newBoletoId = boletoResponse.body.boleto.id;

    const response = await request(app).post(`/boletos/${newBoletoId}/cancelar`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Boleto cancelado com sucesso!');
  });

  test('Listar todos os boletos', async () => {
    const response = await request(app).get('/boletos');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
