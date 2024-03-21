function calculaImposto(renda) {
  if (typeof renda !== 'number' || renda < 0) {
    throw new Error('Renda inválida');
  }

  if (renda <= 2112) {
    return 0; // Isento
  } else if (renda <= 2826.65) {
    return (renda * 0.075) - 158.40;
  } else if (renda <= 3751.05) {
    return (renda * 0.15) - 370.40;
  } else if (renda <= 4664.68) {
    return (renda * 0.225) - 651.73;
  } else {
    return (renda * 0.275) - 884.96;
  }
}

module.exports = calculaImposto;
