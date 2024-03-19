/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior, com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`, se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome: Murilo de Souza Soares Lima
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o primeiro n\u00FAmero: "));
var n2 = parseFloat(teclado("Digite o sugundo n\u00FAmero: "));
if (n1 > n2) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(n1, " e o \n   n\u00FAmero menor \u00E9 ").concat(n2));
}
else {
    if (n2 > n1) {
        console.log("O n\u00FAmero maior \u00E9 ".concat(n2, " e o \n   n\u00FAmero menor \u00E9 ").concat(n1));
    }
    else {
        console.log("Os n\u00FAmeros ".concat(n1, " e ").concat(n2, " s\u00E3o iguais"));
    }
}
;
