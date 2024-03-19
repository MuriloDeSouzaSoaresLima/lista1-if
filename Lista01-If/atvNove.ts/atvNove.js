/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. Faça um aplicativo
 que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, caso não diga
 o(s) motivo(s).
Nome: Murilo de Souza Soares Lima
*/
console.clear();
var teclado = require("prompt-sync")();
var idade = parseFloat(teclado("Digite a sua idade: "));
var peso = parseFloat(teclado("Digite o seu peso: "));
if (idade > 18 && idade < 67 && peso > 60) {
    console.log("Doa\u00E7\u00E3o aprovada");
}
else {
    if (idade < 18 && peso > 60) {
        console.log("Voc\u00EA n\u00E3o apresenta a idade m\u00EDnima para doar");
    }
    else {
        if (idade < 18 && peso < 60) {
            console.log("Voc\u00EA n\u00E3o apresenta a idade e o peso m\u00EDnimos para doar");
        }
        else {
            if (idade > 67 && peso > 60) {
                console.log("Voc\u00EA apresenta uma idade mais que a permitida para doar");
            }
            else {
                if (idade > 67 && peso < 60) {
                    console.log("Voc\u00EA apresenta uma idade mais que a permitida para doar e um peso que n\u00E3o atinge o m\u00EDnimo");
                }
                else {
                    if (peso < 60) {
                        console.log("Voc\u00EA n\u00E3o apresenta o peso m\u00EDnimo para doar");
                    }
                    else {
                        console.log("Algo deu errado");
                    }
                }
            }
        }
    }
}
;
