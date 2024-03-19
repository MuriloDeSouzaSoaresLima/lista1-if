console.clear();
var teclado = require("prompt-sync")();
var altura = parseFloat(teclado("Digite a altura: "));
var raio = parseFloat(teclado("Digite o raio: "));
var volume = (((raio * raio) * 3.14159) * altura);
console.clear();
console.log("O volume da lata \u00E9 de ".concat(volume));
