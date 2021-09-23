


let base = document.querySelector('section p')

const elemts = [

    { tags: 'p', text: 'Frase 1' },
    { tags: 'div', text: 'Frase 2' },
    { tags: 'footer', text: 'Frase 3' },
    { tags: 'section', text: 'Frase 4' }

]

for(let i = 0; elemts[i] != undefined ; i++){

    let info = elemts[i]
    elemt = document.createElement(info.tags)
    console.log(elemt)

}
