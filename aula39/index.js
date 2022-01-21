
function FizzBuzz(a){

    if(typeof a !== 'number') return a
    if(a % 3 === 0 && a % 5 === 0) return console.log('FizzBuzz');
    if(a % 3 === 0) return console.log('Fizz');
    if(a % 5 === 0) return console.log('Buzz');

}


const Fizz = (a) => {

    let type = typeof a 

    if(type === "number"){
            
        let res = a % 3;
        let res2 = a % 5;

        if(res == 0){
            if(res2 == 0){
                return console.log("FizzBuzz");
            }
            return console.log("Fizz");
        }else if(res2 == 0){
            
            return console.log("Buzz");
        }

        return console.log(a);

    }

    return console.log(a, "String")


}

for (let i = 0; i < 100 ; i++){

    FizzBuzz(i);

}

