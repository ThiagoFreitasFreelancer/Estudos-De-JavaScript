
const numberOne = Number(prompt('Digite um numero: '));

let Value = document.getElementById("numero");
console.log(Value)
let isInt = document.getElementById('isInt');
let isNaN = document.getElementById('isNaN');
let ArredondaBaixo = document.getElementById('ArredondaBaixo');
let ArredondaCima = document.getElementById('ArredondaCima');
let TwoHome = document.getElementById('TwoHome');

Value.innerHTML = numberOne
isInt.innerHTML = `${numberOne} é inteito: ${Number.isInteger(numberOne)} <br />`;
isNaN.innerHTML = `É NaN: ${Number.isNaN(Number)} <br />`;
ArredondaBaixo.innerHTML = `Arredondando para Baixo: ${Math.floor(numberOne)} <br />`;
ArredondaCima.innerHTML = `Arredondando para Cima: ${Math.ceil(numberOne)} <br />`;
TwoHome.innerHTML = `Com duas casas decimais: ${numberOne.toFixed(2)} <br />`;

let vari = 1
let rola = 0

let infinito = vari/rola

console.log(infinito * 0)