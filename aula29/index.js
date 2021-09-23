

const numero = [1000, 10000, 2000, 5000, 56555, [2,2,2]]
const [primeiro, segundo, ...rest] = numero

const [,,,,,[, dois]] = numero

console.log(dois)

console.log( primeiro, segundo)

console.log(rest)