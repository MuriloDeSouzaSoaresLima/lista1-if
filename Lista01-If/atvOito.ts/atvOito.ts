/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno: Murilo de Souza Soares Lima
E-mail: Murilossl07@gmail.com
*/
console.clear();
const teclado = require (`prompt-sync`) ();

 let a1: number = parseFloat(teclado(`Digite o valor do primeiro ângulo: `));
 let a2: number = parseFloat(teclado(`Digite o valor do segundo ângulo: `));
 let a3: number = parseFloat(teclado(`Digite o valor do terceiro ângulo: `));

 if (a1 == 90 || a2 == 90 || a3 == 90) {
    console.log(`É um triângulo retângulo`)
 } else {
    if (a1 > 90|| a2 > 90 || a3 > 90) {
        console.log(`É um triângulo obtusângulo`)
    } else {
        if (a1 < 90 && a2 < 90 && a3 < 90) {
            console.log(`É um triângulo acutângulo`)
        } else {
            console.log(`Algo deu errado`)
        }
    }
}