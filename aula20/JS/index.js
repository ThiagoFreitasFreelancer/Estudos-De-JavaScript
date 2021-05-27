
const peoples = [];

function enviar(){

    const name = document.getElementById(`nomePessoa`).value;
    const surname = document.getElementById(`sobrenomePessoa`).value;
    const age = Number(document.getElementById(`idadePessoa`).value);
    const weight = Number(document.getElementById(`pesoPessoa`).value);

    creatPeople(name, surname, age, weight);
}

const creatPeople = (name, surname, age, weight) => {

    const people = {
        name,
        surname,
        age,
        weight
    }

    peoples.push(people);
    console.log(peoples);

    const body = document.body
    body.innerHTML += `<p> ${name} ${surname} ${weight} ${age} </p>`
};

