/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga  o(s) motivo(s).
Nome: Murilo de Souza Soares Lima
*/

console.clear();
const teclado = require (`prompt-sync`) ();

let idade: number = parseFloat(teclado(`Digite a sua idade: `));
let peso: number = parseFloat(teclado(`Digite o seu peso: `));

if (idade > 18 && idade < 67 && peso > 60) {
    console.log(`Doação aprovada`)
} else {
    if (idade < 18 && peso > 60) {
        console.log(`Você não apresenta a idade mínima para doar`)
    } else { if (idade < 18 && peso < 60) {
        console.log(`Você não apresenta a idade e o peso mínimos para doar`)
    } else {
        if (idade > 67 && peso > 60) {
            console.log(`Você apresenta uma idade mais que a permitida para doar`)
        } else {
            if (idade > 67 && peso < 60) {
                console.log(`Você apresenta uma idade mais que a permitida para doar e um peso que não atinge o mínimo`)
            } else {
            if (peso < 60) {
                console.log(`Você não apresenta o peso mínimo para doar`)
            } else {
                console.log(`Algo deu errado`)
            }
        }
    }
}
}
};