const somaHorasExtras = (salario, valorHorasExtras, horasExtras) => {
  return salario + (valorHorasExtras * horasExtras);
};

const esperado = 1250;
const retorno = somaHorasExtras(1000, 25, 10);
if (esperado === retorno) {
  console.log("Teste	passou");
} else {
  console.error(`	Ih,	deu	ruim...`);
}
