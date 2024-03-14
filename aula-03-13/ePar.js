function ePar(n) {
  if (typeof n !== 'number') {
    return false;
    //throw new TypeError('ePar: argumento não é um número')
  }
  return n % 2 === 0;
}

module.exports = ePar;