

const paragrafos = document.querySelectorAll('p')
const div = document.querySelector('.paragrafo')

const styles = getComputedStyle(document.body)
const backgroudColor = styles.backgroundColor

//div.setAttribute('style', `background-Color: ${backgroudColor}`)

for (let elemet of paragrafos){

    //elemet.setAttribute('style', `color: white; background-Color: ${backgroudColor}`) Forma trabalhosa

    elemet.style.backgroundColor = backgroudColor
    elemet.style.color = 'black'

}