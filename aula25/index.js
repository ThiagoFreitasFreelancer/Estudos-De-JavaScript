

const data = new Date();

console.log(data.toString())

//Parametros
// ano, mes, dia, hora, minutos, segundos, milesimos
const dataNova = new Date(2019, 4, 1, 5, 2, 500)
// ou `2019-04-20T20:20:59`

console.log(`Dia`, dataNova.getDate());
console.log(`Mes`, dataNova.getMonth() + 1);
console.log(`Ano`, dataNova.getFullYear());
console.log(`Hora`, dataNova.getUTCHours());
console.log(`Minuto`, dataNova.getUTCMinutes());
console.log(`Segundo`, dataNova.getUTCSeconds());
console.log(dataNova);
