const calculaImposto = require('../calculaImposto');

describe('A função calculaImposto', () => {
  // Testes para casos positivos
  describe('quando a renda está nas faixas de imposto', () => {
    it('deve retornar 0 para rendas até R$ 2.112,00 (isento)', () => {
      expect(calculaImposto(2000)).toBe(0);
    });

    it('deve calcular corretamente o imposto para rendas de R$ 2.112,01 até R$ 2.826,65', () => {
      expect(calculaImposto(2800)).toBeCloseTo((2800 * 0.075) - 158.40, 1);
    });

    it('deve calcular corretamente o imposto para rendas de R$ 2.826,66 até R$ 3.751,05', () => {
      expect(calculaImposto(3700)).toBeCloseTo((3700 * 0.15) - 370.40, 1);
    });

    it('deve calcular corretamente o imposto para rendas de R$ 3.751,06 até R$ 4.664,68', () => {
      expect(calculaImposto(4600)).toBeCloseTo((4600 * 0.225) - 651.73, 1);
    });

    it('deve calcular corretamente o imposto para rendas acima de R$ 4.664,68', () => {
      expect(calculaImposto(5000)).toBeCloseTo((5000 * 0.275) - 884.96, 1);
    });
  });

  // Testes para casos negativos
  describe('quando a renda é negativa ou não numérica', () => {
    it('deve lançar um erro para rendas negativas', () => {
      expect(() => calculaImposto(-100)).toThrow('Renda inválida');
    });

    it('deve lançar um erro para rendas não numéricas', () => {
      expect(() => calculaImposto('abc')).toThrow('Renda inválida');
    });
  });
});
