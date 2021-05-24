


let umaString = "texto\ texto\"";

//console.log(umaString)

//Strings sao indexadas
//console.log(umaString[0])
//console.log(umaString.charAt(0))

//funcao para concatenar

//umaString.concat('call', 'of', 'duty');
// ou
//umaString += 'call' + 'of' + 'duty'

// das duas formas cuninam

//uma forma melhor

//console.log(`${umaString} call of duty`)

let string = 'call of duty'

// das 3 formas funcionam a concatenacao
console.log(string + ' black ops 2 ')
console.log(string.concat(' black ops 2 '))
console.log(`${string} black ops 2`)

console.log(string.indexOf('rola'))

console.log(string.replace(`call`, `rola`))

console.log(string.length)

console.log(string.slice(string.indexOf(`call`), string.indexOf(` `)))

console.log(string.split(` `))
console.log(string.split(` `, 2)) // retorna 2 resultados de corte