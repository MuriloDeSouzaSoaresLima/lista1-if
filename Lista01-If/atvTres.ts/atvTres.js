/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:
*/
console.clear();
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u" || letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
    console.log("A letra \u00E9 uma vogal");
}
else {
    console.log("A letra \u00E9 uma consoante");
}
;
