function contaElementos(array, elemento) {
  let cont = 0;
  for (let valorAtual of array) {
    if (valorAtual === elemento) {
      cont++;
    }
  }
  return cont;
}


// function contaElementos(array, elemento) {
//   return array.filter(valorAtual => valorAtual === elemento).length;
// }


// function contaElementos(array, elemento) {
//   return array.reduce((contador, valorAtual) => {
//     return valorAtual === elemento ? contador + 1 : contador;
//   }, 0);
// }


module.exports = contaElementos;