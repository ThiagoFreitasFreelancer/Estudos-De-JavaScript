const container = () => {

    //Precisa melhorar esse codigo


    const listaDeResultados = []
    const tabela = document.querySelector(`#tabela`);
    const resultado = document.querySelector(`.list`);
    const form = document.querySelector(`.form`);
    const peso = form.querySelector(`.peso`);
    const altura = form.querySelector(`.altura`);

    console.log(tabela)
    console.log(resultado)

    function reset(event){
        event.preventDefault()
        if(Number(peso.value) && Number(altura.value)){

            const imc = Number(peso.value) / Number(altura.value * altura.value);

            if(imc < 18.5){
                resultado.insertAdjacentHTML("afterend", `<tr><td>${imc}</td><td>Abaixo do peso</td></tr>`);
            }else if( imc >= 18.5 && imc <= 24.5 ){
                resultado.insertAdjacentHTML("afterend", `<tr><td>IMC: ${imc}</td><td> Peso normal</td></tr>`);
            }else if( imc >= 25 && imc <= 29.9 ){
                resultado.insertAdjacentHTML("afterend", `<tr><td>IMC: ${imc}</td><td> Sobrepeso</td></tr>`);
            }else if( imc >= 30 && imc <= 34.9 ){
                resultado.insertAdjacentHTML("afterend", `<tr><td>IMC: ${imc}</td><td> Obesidade grau 1</td></tr>`);
            }else if( imc >= 35 && imc <= 39.9){
                resultado.insertAdjacentHTML("afterend", `<tr><td>IMC: ${imc}</td> <td>Obesidade grau 2</td></tr>`);
            }else{
                resultado.insertAdjacentHTML("afterend", `<tr><td>IMC: ${imc}</td><td>Obesidade grau 3</td></tr>`);
            }

            return ``
        }

        resultado.innerHTML = ` Valor incorreto `
        
        //Pode usar o document.creatElement()
        //e depois fazer document.appendChild()
        // ate inserir umas class no novo elemento com
        // elemento.classList.add()

        
    }

    form.addEventListener(`submit`, reset);   

};
container();