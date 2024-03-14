const reverteString = require('../reverteString'); // Ajuste o caminho conforme necessário

describe('A função reverteString', () => {
  // Testes para casos positivos
  describe('quando a string não está vazia', () => {
    it('deve inverter corretamente uma string de um único caractere', () => {
      expect(reverteString('a')).toBe('a');
    });

    it('deve inverter corretamente uma string com vários caracteres', () => {
      expect(reverteString('abcd')).toBe('dcba');
    });

    it('deve inverter corretamente uma string que contém espaços', () => {
      expect(reverteString('a b c')).toBe('c b a');
    });

    it('deve inverter corretamente uma string com caracteres especiais', () => {
      expect(reverteString('!@#$')).toBe('$#@!');
    });
  });

  // Testes para casos negativos
  describe('quando a string está vazia', () => {
    it('deve retornar uma string vazia', () => {
      expect(reverteString('')).toBe('');
    });

    // // Dependendo da implementação desejada, você pode querer retornar uma string vazia
    // // ou modificar a implementação da função para lançar um erro específico.
    // // Este teste está preparado para a opção de retornar uma string vazia.

    // it('deve tratar null como uma entrada inválida e retornar uma string vazia ou lançar um erro', () => {
    //   expect(reverteString(null)).toBe('');
    // });

    // it('deve tratar undefined como uma entrada inválida e retornar uma string vazia ou lançar um erro', () => {
    //   expect(reverteString(undefined)).toBe('');
    // });

    // it('deve tratar números como entrada inválida e retornar uma string vazia ou lançar um erro', () => {
    //   expect(reverteString(1234)).toBe('');
    // });

    // it('deve tratar objetos como entrada inválida e retornar uma string vazia ou lançar um erro', () => {
    //   expect(reverteString({})).toBe('');
    // });

  });
});
