

function rola(rola){
    return `Bom dia ${rola}`;
}

let value = rola(`thola`);

console.log(value);

/**
 * Aceita valores default 
 */
function esse(x = 1, y = 2){

    return x + y;
}


const raiz = function (){
    return ``;
};


const raizNesima = function (n, raiz){
    return n**raiz;
};


const raizz = raizNesima(5, 2);

console.log(raizz);

//Arrio Function serve pra facilitar vida
//Nao precisa por o nome function

const nomeeDaFuncao = () =>{ 
    return;
 };

//quando voce tem UM so valor nao precisa dos parenteses
//nem do colchetes
const retorno = ``;
const nomeDaFuncao = parametro => parametro + retorno;