function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a + b;
}

module.exports = soma; // Exporta a função para uso nos testes
