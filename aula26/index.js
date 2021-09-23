
const dias = [
    `domingo`,
    `segunda`,
    `terca`,
    `quarta`,
    `quinta`,
    `sexta`,
    `sabado`,    
]

const date = new Date();
let diaDaSemana = date.getDay();
let semanaTexto;

console.log(diaDaSemana)
console.log(`Dia: ${dias[diaDaSemana]}, Numero do dia da semana ${diaDaSemana}`);
