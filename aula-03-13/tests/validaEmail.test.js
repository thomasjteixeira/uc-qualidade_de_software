const validaEmail = require('../validaEmail');

describe('A função validaEmail', () => {
  // Testes para casos positivos
  describe('quando o email é válido', () => {
    it('deve retornar true para um email simples', () => {
      expect(validaEmail('email@example.com')).toBeTruthy();
    });

    it('deve retornar true para um email com subdomínio', () => {
      expect(validaEmail('email@sub.example.com')).toBeTruthy();
    });

    it('deve retornar true para um email com domínio de nível superior', () => {
      expect(validaEmail('email@example.com.br')).toBeTruthy();
    });
  });

  // Testes para casos negativos
  describe('quando o email é inválido', () => {
    it('deve retornar false para um email sem o caractere @', () => {
      expect(validaEmail('emailexample.com')).toBeFalsy();
    });

    it('deve retornar false para um email sem domínio', () => {
      expect(validaEmail('email@')).toBeFalsy();
    });

    it('deve retornar false para um email com espaços', () => {
      expect(validaEmail('email @example.com')).toBeFalsy();
    });

    it('deve retornar false para um email com dois caracteres @', () => {
      expect(validaEmail('e@mail@example.com')).toBeFalsy();
    });

    it('deve retornar false para um email sem ponto no domínio', () => {
      expect(validaEmail('email@examplecom')).toBeFalsy();
    });
  });
});
