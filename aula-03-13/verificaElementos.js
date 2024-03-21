function verificaElementos(array, elementos) {
  for (let elemento of elementos) {
    if (!array.includes(elemento)) {
      return false;
    }
  }
  return true;
}

// function verificaElementos(array, elementos) {
//   return elementos.every((elemento) => array.includes(elemento));  
// }

module.exports = verificaElementos;