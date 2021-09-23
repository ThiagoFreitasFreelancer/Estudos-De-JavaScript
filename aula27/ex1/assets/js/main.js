// function init(){

//     const date = new Date();

//     // Forma errada de fazer
//     // const section = document.querySelector(`.container`);
//     // const result = section.querySelector(`.h1`);

//     // Forma certa de fazer
//     //
//     const result = document.querySelector(`.container h1`);
//     //


//     function getYearNow(date){
        
//         const year = date.getFullYear()

//         return `${year}`;
//     }

//     function getHoursNow(date){

//         const hours = date.getHours()
//         const minutes = date.getMinutes()

//         return `${hours}:${minutes}`
//     }

//     function getDateNow(date){
//         const month = [
//             `January`,
//             `February`,
//             `March`,
//             `April`,
//             `May`,
//             `June`,
//             `July`,
//             `August`,
//             `September`,
//             `October`,
//             `November`,
//             `September`
//         ]
//         const months = date.getMonth() + 1;

//         return `${month[months]}`;
//     }

//     function getDayWeek(date){

//         const days = [
//             `sunday`,
//             `monday`,
//             `tuesday`,
//             `wednesday`,
//             `thursday`,
//             `friday`,
//             `saturday`,
//         ]

//         const dayWeek = date.getDay();
//         const day = date.getDate()

//         return `${days[dayWeek]}, ${day}`;

//     }

//     result.innerHTML = `<p>${getDayWeek(date)} ${getDateNow(date)} ${getYearNow(date)} ${getHoursNow(date)} </p>`
    
// };

// function initTwo(){
//     const date = new Date();
//     const result = document.querySelector(`.container h1`);

//     function getFormatDate(date){
        
//         const stringDate = String(date);

//         const dateSplit = stringDate.split(` `, 6)
//         console.log(dateSplit)
//         const day = dateSplit[0]
//         const month = dateSplit[1];
//         const numberDay = dateSplit[2];
//         const year = dateSplit[3]
//         const hours = dateSplit[4]

//         return `${day}, ${numberDay} of ${month} of ${year} ${hours}`
//     }   

//     result.innerHTML = `<p>${getFormatDate(date)}</p>`

// }

// init()

//Forma inteligente de fazer

const result = document.querySelector(`.container h1`);
const date = new Date();
result.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle: 'full'}) + ' ' + date.toLocaleTimeString('pt-BR')

