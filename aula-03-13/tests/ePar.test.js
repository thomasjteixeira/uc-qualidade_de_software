const ePar = require('../ePar');

describe('ePar - Casos Positivos', () => {
  it('deve retornar true para 2, verificando que é par', () => {
    expect(ePar(2)).toBe(true);
  });

  it('deve retornar true para 0, considerando-o como par', () => {
    expect(ePar(0)).toBeTruthy();
  });

  it('deve retornar true para -4, confirmando que números negativos também podem ser pares', () => {
    expect(ePar(-4)).toBeTruthy();
  });
});

describe('ePar - Casos Negativos', () => {
  it('deve retornar false para 3, por ser ímpar', () => {
    expect(ePar(3)).toBeFalsy();
  });

  it('deve retornar false para -5, por ser ímpar', () => {
    expect(ePar(-5)).toBe(false);
  });

  it('deve tratar strings como não numéricas e retornar false', () => {
    expect(ePar("string")).toBeFalsy();
  });

  it('deve retornar false para objetos, reconhecendo que não são números', () => {
    expect(ePar({})).toBeFalsy();
  });

  it('deve considerar null como não numérico e retornar false', () => {
    expect(ePar(null)).toBeFalsy();
  });

  it('deve considerar undefined como não numérico e retornar false', () => {
    expect(ePar(undefined)).toBeFalsy();
  });
});
