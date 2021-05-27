

const alunos = ['jose', 'pedro', 'antonio'];



//Adiciona no fim
alunos.unshift(`segundo`);
alunos.unshift(`primeiro`);

//Adiciona no começo
alunos.push(`ante-penultimo`);
alunos.push(`penultimo`);
alunos.push(`ultimo`, `ultimo`, `ultimo`);

console.log(alunos.slice(0, 3)); //pega entervalos
console.log(alunos.slice(0, -2)); // tamanho da string -2

/**
 * para saber ser alunos e uma instancia de Array
 */
console.log(alunos instanceof Array);

// console.log(alunos.length);
// console.log(alunos);
// alunos[alunos.length] = `pedro`;
// console.log(alunos);
// alunos[alunos.length] = `rafael`;
// console.log(alunos);
// alunos[alunos.length] = `ze`;

console.log(alunos);

// console.log(alunos);
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);