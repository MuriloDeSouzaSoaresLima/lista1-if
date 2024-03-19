/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente, tal que 0 é a
 menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), conforme a seguinte
  tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno: Murilo de Souza Soares Lima
*/
console.clear();
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("Digite o valor da primeira nota: "));
var n2 = parseFloat(teclado("Digite o valor da segunda nota: "));
var nota = ((n1 + n2) / 2);
if (nota >= 8.5 && nota <= 10) {
    console.log("A nota \u00E9 A");
}
else {
    if (nota >= 7 && nota < 8.5) {
        console.log("A nota \u00E9 B");
    }
    else {
        if (function (nota) { return 5 && nota < 7; }) {
            console.log("A nota \u00E9 C");
        }
        else {
            if (function (nota) { return 3 && nota < 5; }) {
                console.log("A nota \u00E9 D");
            }
            else {
                console.log("A nota \u00E9 E");
            }
        }
    }
}
