const verificaElementos = require('../verificaElementos');

describe('A função verificaElementos', () => {
  // Testes para casos positivos
  describe('quando todos os elementos especificados estão presentes no array', () => {
    it('deve retornar true para um array contendo todos os elementos', () => {
      expect(verificaElementos([1, 2, 3, 4, 5], [1, 2, 3])).toBeTruthy();
    });

    it('deve retornar true mesmo se os elementos estiverem em ordem diferente', () => {
      expect(verificaElementos([5, 4, 3, 2, 1], [2, 3, 5])).toBeTruthy();
    });

    it('deve retornar true se os elementos a verificar forem idênticos aos do array', () => {
      expect(verificaElementos(['a', 'b', 'c'], ['a', 'b', 'c'])).toBeTruthy();
    });
  });

  // Testes para casos negativos
  describe('quando pelo menos um dos elementos especificados não está presente no array', () => {
    it('deve retornar false se um elemento está faltando', () => {
      expect(verificaElementos([1, 2, 3], [1, 4])).toBeFalsy();
    });

    it('deve retornar false se vários elementos estão faltando', () => {
      expect(verificaElementos(['a', 'b', 'c'], ['a', 'd', 'e'])).toBeFalsy();
    });

    it('deve retornar false se o array a ser verificado está vazio', () => {
      expect(verificaElementos([], ['1'])).toBeFalsy();
    });
  });
});
