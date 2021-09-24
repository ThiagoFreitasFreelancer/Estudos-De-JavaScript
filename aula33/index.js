
// for in le os indeces ou chavaes do objeto


const STR = 'rooola'

const esse = ['cavalo', 'gato', 'cachorro']

const pessoa = {
    nome : 'Thiago',
    sobrenome: 'Freitas',
    idade: 23
}

console.log('##############')

console.log('For in, retorna o indice')

for (let indice in pessoa){

    console.log(indice, pessoa[indice])

}

console.log('##############')

console.log('for of, não funciona para objetos, somente para coisas iteraveis, array, matriz, string pois retorna o element odo indice')

for (let data of STR ){

    console.log(data)
}

console.log('###############')

console.log('forEach')

esse.forEach( function (valor, indice, array){

    console.log('Valor: ', valor, 'Indice: ', indice, 'Array: ', array)

})
