function ehMaiorDeIdade(idade) {
  // BUG: deveria ser >=, mas está usando >
  return idade > 18;
}

module.exports = ehMaiorDeIdade;