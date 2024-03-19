/* (10 pontos)
10 - Crie um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
    "Telefonou para a vítima?"
    "Esteve no local do crime?"
    "Mora perto da vítima?"
    "Devia para a vítima?"
    "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
 Se a pessoa responder positivamente a 2 questões ela deve ser classificada/exibida como "Suspeita",
  entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
Aluno: Murilo de Souza Soares Lima
*/
console.clear();
var teclado = require("prompt-sync")();
console.log("______________________________");
console.log("|   Para \"sim\" digite \"s\"    |");
console.log("|   Para \"n\u00E3o\" digite \"n\"    |");
console.log("______________________________");
var suspeita = 0;
var suspeita1 = teclado("Telefonou para a v\u00EDtima?   ");
var suspeita2 = teclado("Esteve no local do crime?   ");
var suspeita3 = teclado("Mora perto da v\u00EDtima?   ");
var suspeita4 = teclado("Devia para a v\u00EDtima?   ");
var suspeita5 = teclado("J\u00E1 trabalhou com a v\u00EDtima?   ");
if (suspeita1 == "s") {
    ++suspeita;
}
else { }
;
if (suspeita2 == "s") {
    ++suspeita;
}
else { }
;
if (suspeita3 == "s") {
    ++suspeita;
}
else { }
;
if (suspeita4 == "s") {
    ++suspeita;
}
else { }
;
if (suspeita5 == "s") {
    ++suspeita;
}
else { }
;
if (suspeita == 5) {
    console.log("Assassino");
}
else {
    if (suspeita >= 3) {
        console.log("C\u00FAmplice");
    }
    else {
        if (suspeita == 2) {
            console.log("Suspeita");
        }
        else {
            console.log("Inocente");
        }
    }
}
;
