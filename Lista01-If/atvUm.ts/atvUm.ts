/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Murilo de Souza Soares Lima
*/

console.clear();
const teclado = require(`prompt-sync`) ();

let altura: number = parseFloat(teclado(`Digite a altura: `));
let raio: number = parseFloat(teclado(`Digite o raio: `));
let volume: number = (((raio*raio)*3.14159)*altura);

console.clear();

console.log(`O volume da lata é de ${volume}`);