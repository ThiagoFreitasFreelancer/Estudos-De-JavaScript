 let numberOne = 10;
 let numberTwo = 2.5;

 // Padraão de contagem IEEE 754-2008
 // para concatenar os dois
 // numberOne.toString() + numberTwo -> retorna uma string
 // porem o numberOne não muda se tipo
 // para mudar o tipo numero para string numberOne = numberOne.toString()
 // para pegar n casas decimais numberTwo.toFixed(n)
 // Verificar se um numero e inteiro Number.isIntenger(numberOne)
 //retorna true ou false, se for float sera false

 /**
  * JavaScripte tem algumas inpreçisoes, como por exemplo
  * let num1 = 0.7
  * let num2 = 0.1
  * 
  * a soma desses dois numero retorna 0.799999999
  * 
  * para corrigir pode ser usado o parFloat()
  *
  */

 numberOne = 0.1
 numberTwo = 0.7
 console.log(numberOne + numberTwo)
 console.log(parseFloat((numberOne + numberTwo).toFixed(2)))


