function contemPropriedades(objeto, propriedades) {
  const chaves = Object.keys(propriedades);
  for (let i = 0; i < chaves.length; i++) {
    const chave = chaves[i];
    if (!objeto.hasOwnProperty(chave) || objeto[chave] !== propriedades[chave]) {
      return false;
    }
  }
  return true;
}

// function contemPropriedades(objeto, propriedades) {
//   return Object.keys(propriedades)
//     .every(key => objeto.hasOwnProperty(key) && objeto[key] === propriedades[key]);
// }

// if (Object.keys(propriedades).length === 0) {
//   return false;
// }
module.exports = contemPropriedades;
