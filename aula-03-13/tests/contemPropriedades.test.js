const contemPropriedades = require('../contemPropriedades');

describe('A função contemPropriedades', () => {
  // Testes para casos positivos
  describe('quando o objeto contém todas as propriedades especificadas com os mesmos valores', () => {
    it('deve retornar true para um objeto que contém as propriedades especificadas', () => {
      expect(contemPropriedades({ nome: 'João', idade: 30 }, { nome: 'João' })).toBeTruthy()
    });

    it('deve retornar true para um objeto que contém as propriedades especificadas com valores adicionais', () => {
      expect(contemPropriedades({ nome: 'Ana', idade: 25, cidade: 'São Paulo' }, { nome: 'Ana', idade: 25 })).toBeTruthy()
    });
  });

  // Testes para casos negativos
  describe('quando o objeto não contém todas as propriedades especificadas ou os valores são diferentes', () => {
    it('deve retornar false se uma propriedade está faltando', () => {
      expect(contemPropriedades({ nome: 'Carlos' }, { nome: 'Carlos', idade: 22 })).toBeFalsy();
    });

    it('deve retornar false se uma propriedade tem um valor diferente', () => {
      expect(contemPropriedades({ nome: 'Bia', idade: 20 }, { nome: 'Bia', idade: 25 })).toBeFalsy();
    });

    it('deve retornar false se o objeto está vazio', () => {
      expect(contemPropriedades({}, { nome: 'Pedro' })).toBeFalsy();
    });

    it('deve retornar false se as propriedades especificadas estão vazias', () => {
      expect(contemPropriedades({ nome: 'Pedro', idade: 30 }, {})).toBeFalsy();
    });
  });
});
