const peopleEstudent = {
    nome: `Jose`,
    sobrenome: `Antonio`,
    idade: 25,
    rua: () => {
        return `Rua sao caitano`;
    },
    pai: `rene`
};

console.log(peopleEstudent.rua());


const creatObjct = (nome, sobrenome, pai, idade, rua) => {
    const pessoa = {
        nome: nome,
        sobrenome: sobrenome,
        pai: pai,
        idade: idade,
        rua: () => {
            return `Rua ${rua}`;
        },
        fala (){
            console.log(`${this.nome} ${this.sobrenome}, fala ola`)
        }
    };
    return pessoa;
};
/////////////////////// OU PODE SER DESSA FORMA QUANDO O PARAMETRO E IGUAL AO NOME DO OBJETO
const creatObjct2 = (nome, sobrenome, pai, idade, rua) => {
    const pessoa = {
        nome,
        sobrenome,
        pai,
        idade,
        rua: () => {
            return `Rua ${rua}`;
        },
        fala (){
            return `oi`;
        }
    };
    return pessoa;
};

const result = creatObjct(`thiago`, `freitas`, `rene`, 23, `sao pedro`);

console.log(result);