

let nome;

nome = prompt(`Qual seu nome completo ?`);
console.log(nome);

document.body.innerHTML += `Seu nome é: ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.replace(/ /g, "").length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`;
document.body.innerHTML += `Qual o primeiro índice da letra r no seu nome? ${nome.indexOf(`r`)} <br />`;
document.body.innerHTML += `Qual o último índice da letra t no seu nome? ${nome.lastindexOf(`t`)}<br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nome.replace(/ /g, "").slice(-3)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.slice(" ")} <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toLocaleUpperCase()}<br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()}<br />`;
