/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Murilo de Souza Soares Lima
E-mail: Murilossl07@gmail.com
*/
console.clear();
var teclado = require("prompt-sync")();
var a1 = parseFloat(teclado("Digite o valor do primeiro \u00E2ngulo: "));
var a2 = parseFloat(teclado("Digite o valor do segundo \u00E2ngulo: "));
var a3 = parseFloat(teclado("Digite o valor do terceiro \u00E2ngulo: "));
if (a1 == 90 || a2 == 90 || a3 == 90) {
    console.log("\u00C9 um tri\u00E2ngulo ret\u00E2ngulo");
}
else {
    if (a1 > 90 || a2 > 90 || a3 > 90) {
        console.log("\u00C9 um tri\u00E2ngulo obtus\u00E2ngulo");
    }
    else {
        if (a1 < 90 && a2 < 90 && a3 < 90) {
            console.log("\u00C9 um tri\u00E2ngulo acut\u00E2ngulo");
        }
        else {
            console.log("Algo deu errado");
        }
    }
}
