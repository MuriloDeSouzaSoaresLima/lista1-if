/* (10 pontos)
 7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se
 forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas,
  calcule e escreva o valor total da compra.
Nome Aluno: Murilo de Souza Soares Lima
E-mail: Murilossl07@gmail.com
*/
console.clear();
var teclado = require("prompt-sync")();
var quantMaca = parseFloat(teclado("Digite a quantidade de ma\u00E7\u00E3s compradas: "));
var valorTotal = 0;
if (quantMaca < 12) {
    valorTotal = quantMaca * 0.3;
}
else {
    valorTotal = quantMaca * 0.25;
}
console.log("O valor total da compra \u00E9 de ".concat(valorTotal));
