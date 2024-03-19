/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno: Murilo De Souza Soares Lima
*/
console.clear();
const teclado = require (`prompt-sync`) ();

let n1 = parseFloat(teclado(`Digite o primeiro número: `));
let n2 = parseFloat(teclado(`Digite o segundo número: `));
let n3 = parseFloat(teclado(`Digite o terceiro número: `));

let menor: number = 0;
let mediano: number = 0;
let maior: number = 0;

if (n1 >  n2 && n1 > n3){
    let maior: number = n1;
    if(n2>n3){
        mediano= n2;
        menor= n3;
    }
    else{
        menor= n2
        mediano= n3
    }

}
else if(n2 > n1 && n2 > n3){
   maior = n2
if (n1 > n3) {
     mediano = n1
     menor = n3
} else {
    mediano= n3
    menor= n1
}
}
else if(n3 > n1 && n3 > n2){
let maior: number = n3
if (n1 > n2) {
    mediano= n1
    menor= n2
} else {
    mediano= n2
    menor= n1
}
}
else{
console.log(`algo deu errado`)
};


console.log(`Os números em sequência: ${menor}; ${mediano}; ${maior}`);