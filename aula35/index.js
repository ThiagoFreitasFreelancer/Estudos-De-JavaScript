

//let control = 0;

// while( control < 10 ){

//     console.log(control);
//     controle++;
// }

//função randominda de intervalos
function random(min = 0, max = 0){
    const result = Math.random() * (max - min) + min; 

    //return r.toFixed(0) pode sefeito assim para retornar uma casa descimal

    return Math.floor(result)
}

let control = 10;

while(control !== 10){
    
    control = random(1, 50);
    console.log(control)

}

console.log('#############################')

do{

    control = random(1, 50);
    console.log(control)

}while(control !== 10);