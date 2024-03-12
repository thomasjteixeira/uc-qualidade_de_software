const somaHorasExtras = (salario, valorHorasExtras, horasExtras) => {
  return salario + (valorHorasExtras * horasExtras);
};

let calculo = somaHorasExtras(1000, 25, 10);
console.log(calculo);
