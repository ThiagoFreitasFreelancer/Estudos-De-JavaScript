

const pessoa = {
    nome: 'Rola',
    idade: 20,
    endereco: {
        Rua: `Jose Farias`,
        Bairro: 'Hengino Bernardes',
        Cidade: 'Ilheus',
        Numero: 55
    }
}

//Atribuição via Desestruturação

const {nome, idade, ...resto} = pessoa

console.log(nome, idade, resto)