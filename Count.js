const body = document.querySelector("body");
const divPrincipal = document.createElement('div');
const form = document.createElement("form");
const divSec = document.createElement('div')

const btnPlusOne = document.createElement("button");
const btnPlusTwo = document.createElement("button");
const btnReset = document.createElement("button");
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");
const img = document.createElement('img');
const spamA = document.createElement('span')
const divTercero = document.createElement('div')
const labelSelect = document.createElement('label')
const divBtns = document.createElement('div')

body.appendChild(divPrincipal);
divPrincipal.appendChild(img);
img.src = "./img/table-tennis-1208378_640.jpg";
divPrincipal.appendChild(divSec);
divSec.appendChild(divTercero)
divTercero.appendChild(counterDisplayOne);
divTercero.appendChild(spamA)
divTercero.appendChild(counterDisplayTwo);
divSec.appendChild(form);
divSec.appendChild(divBtns)
divBtns.appendChild(btnPlusOne);
divBtns.appendChild(btnPlusTwo);
divBtns.appendChild(btnReset);
form.appendChild(labelSelect)
labelSelect.innerText = 'Max Points '
spamA.innerText = 'VS'
spamA.style.color = 'red'

body.style.backgroundColor = 'lightblue'

divPrincipal.style.display = 'flex'
divPrincipal.style.flexDirection = 'column'
divPrincipal.style.alignItems = 'center'
divSec.style.width = '40em'




img.style.width = '40em'
img.style.boxShadow = '5px 5px 5px 0px black'



divSec.style.display = 'flex'
divSec.style.flexDirection = 'column'
divSec.style.alignItems = 'center'

counterDisplayOne.style.fontSize = '8em'
spamA.style.fontSize = '5em'
counterDisplayTwo.style.fontSize = '8em'



divTercero.style.display = 'flex'
divTercero.style.justifyContent ='center'
divTercero.style.alignItems = 'center'
divTercero.style.gap = '4em'

labelSelect.style.fontSize = '4em'
labelSelect.style.color = 'red'


divBtns.style.padding = '2em'



btnPlusOne.innerText = 'Player 1'
btnPlusOne.style.width = '10em'
btnPlusOne.style.height = '2em'
btnPlusOne.style.fontSize = '1rem'
btnPlusOne.style.backgroundColor = '#000'
btnPlusOne.style.border = '3px solid blue'
btnPlusOne.style.borderRadius = '1em'
btnPlusOne.style.color = '#fff'
btnPlusOne.style.fontWeight = 'bolder'
btnPlusOne.style.transition = 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s'
btnPlusOne.style.boxShadow = '-5px 5px 0px 0px red'
btnPlusOne.style.textAlign = 'center'


btnPlusTwo.innerText = 'Player 2'
btnPlusTwo.style.width = '10em'
btnPlusTwo.style.height = '2em'
btnPlusTwo.style.fontSize = '1rem'
btnPlusTwo.style.backgroundColor = '#000'
btnPlusTwo.style.border = '3px solid blue'
btnPlusTwo.style.borderRadius = '1em'
btnPlusTwo.style.color = '#fff'
btnPlusTwo.style.fontWeight = 'bolder'
btnPlusTwo.style.transition = 'cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s'
btnPlusTwo.style.boxShadow = '-5px 5px 0px 0px red'
btnPlusTwo.style.textAlign = 'center'



btnReset.innerText = 'RESET';

btnReset.style.fontSize = '17px'
btnReset.style.padding = '10px 25px'
btnReset.style.borderRadius = '0.7rem'
btnReset.style.backgroundImage = 'linear-gradient(rgb(214, 202, 254), rgb(158, 129, 254))'
btnReset.style.border = '2px solid rgb(50, 50, 50)'
btnReset.style.borderBottom = '5px solid rgb(50, 50, 50)'
btnReset.style.boxShadow = '0px 1px 6px 0px rgb(158, 129, 254)'
btnReset.style.transform = 'translate(0, -3px)'
btnReset.style.transition = '0.2s'
btnReset.style.transitionTimingFunction = 'linear'









counterDisplayOne.innerText = 0;
counterDisplayTwo.innerText = 0;

let options = [
    { value: 3, text: "3" },
    { value: 5, text: "5" },
    { value: 7, text: "7" },
    { value: 10, text: "10" },
    { value: 15, text: "15" },
];

function createSelect(optionsList) {
    let select = document.createElement("select");
    
    for (let i = 0; i < optionsList.length; i++) {
        const element = optionsList[i];
        let option = document.createElement("option");
        option.setAttribute("value", element.value);
        option.innerText = element.text;
        select.appendChild(option);
    }
    
    return select;
}

const select = createSelect(options);
form.appendChild(select);

let counterOne = 0;
let counterTwo = 0;

btnPlusOne.addEventListener("click", () => {
    if (counterOne < selectValue) {
        counterOne++;
        counterDisplayOne.innerText = counterOne;
    }
});

btnPlusTwo.addEventListener("click", () => {
    if (counterTwo < selectValue) {
        counterTwo++;
        counterDisplayTwo.innerText = counterTwo;
    }
});

btnReset.addEventListener("click", () => {
    counterDisplayOne.innerText = 0;
    counterDisplayTwo.innerText = 0;
    counterOne = 0;
    counterTwo = 0;
});

let selectValue = 3;
select.addEventListener("change", () => {
    selectValue = document.querySelector("select").value;
});

select.style.fontSize = '3em'
select.style.borderRadius = '10px'

