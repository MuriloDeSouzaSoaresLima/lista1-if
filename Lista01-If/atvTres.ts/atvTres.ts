/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno: Murilo de Souza Soares Lima
*/

console.clear();
const teclado = require(`prompt-sync`) ();

let letra: string = teclado(`Digite a letra: `);

if (letra == `a` || letra == `e` || letra == `i` ||letra == `o` || letra == `u` || letra == `A` || letra == `E` || letra == `I` ||letra == `O` || letra == `U` ) {
    console.log(`A letra é uma vogal`)
} else {
    console.log(`A letra é uma consoante`)
};