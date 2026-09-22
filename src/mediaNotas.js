function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  // BUG: deveria dividir por notas.length, está dividindo por um valor fixo
  return soma / 3;
}

module.exports = calcularMedia;