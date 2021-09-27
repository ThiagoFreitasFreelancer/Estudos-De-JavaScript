
//Todas fazem a mesma coisa porem cada vez com menos codigo

function bigNumber1(numberOne = 10, numberTwo = 50){

    if(numberOne > numberTwo){
        return numberOne
    }

    return numberTwo

}

function bigNumber2(numberOne = 10, numberTwo = 50){
    return numberTwo > numberOne ? numberTwo : numberOne 
}


const bigNumber3 = (numberOne = 10, numberTwo = 50) => {return numberTwo > numberOne ? numberTwo : numberOne;}


const bigNumber4 = (numberOne = 10, numberTwo = 50) => numberTwo > numberOne ? numberTwo : numberOne;

console.log(bigNumber1(), bigNumber2(), bigNumber3(), bigNumber4());