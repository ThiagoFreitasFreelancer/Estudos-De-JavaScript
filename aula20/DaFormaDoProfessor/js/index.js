function init(){
    const form = document.querySelector(`.form`);
    const result = document.querySelector(`.result`);
    const peoples = []
    
    
    /* INFORMAÇOES
    //Quando o evento de eviar o formulario for acionado a função tanbem sera
    // form.onsubmit = function(event){
    //     // Não deixa o comportamentos padrões do
    //     //navegador de acontecer, como por exemplo atualizar a pagina
    //     //que é o desejado nesse caso
    //     event.preventDefault();
    //     alert('1');
    //     console.log(`foi enviado`);
    // };

    //           OU, faz a mesma coisa da forma moderna
    */
    
    const creatObject = (name, age, weight, surname) => {
        const people = {
            name,
            surname,
            age,
            weight
        };
        return people;
    };

    function recebeEventoForm (event){
        event.preventDefault();
        const nome = form.querySelector(`.nomePessoa`).value;
        const sobrenome = form.querySelector(`.sobrenomePessoa`).value;
        const idade = form.querySelector(`.idadePessoa`).value;
        const peso = form.querySelector(`.pesoPessoa`).value;

        peoples.push(creatObject(nome, idade, peso, sobrenome));
        result.innerHTML += `<p>Nome:${nome} ${sobrenome} Idade: ${idade} Peso: ${peso}</p>`;
        console.log(peoples);
    }

    form.addEventListener(`submit`, recebeEventoForm);
}
init()
