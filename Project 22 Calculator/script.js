let calc = document.querySelector('.calculator');
let display = document.querySelector('.display');
// let input

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const plus = document.querySelector('#plus');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const minus = document.querySelector('#minus');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const multiply = document.querySelector('#multiply');
const nine = document.querySelector('#nine');
const percent = document.querySelector('#percent');
let clear = document.querySelector('#clear');

let submit = document.querySelector('#equals');

calc.addEventListener('submit', calculate);

zero.addEventListener('click', function(){
    display.textContent  += zero.innerText;
})
one.addEventListener('click', function(){
    display.textContent  += one.innerText;
})
two.addEventListener('click', function(){
    display.textContent  += two.innerText;
})
three.addEventListener('click', function(){
    display.textContent  += three.innerText;
})
four.addEventListener('click', function(){
    display.textContent  += four.innerText;
})
five.addEventListener('click', function(){
    display.textContent  += five.innerText;
})
six.addEventListener('click', function(){
    display.textContent  += six.innerText;
})
seven.addEventListener('click', function(){
    display.textContent  += seven.innerText;
})
eight.addEventListener('click', function(){
    display.textContent  += eight.innerText;
})
nine.addEventListener('click', function(){
    display.textContent  += nine.innerText;
})
plus.addEventListener('click', function(){
    display.textContent  += plus.innerText;
})
minus.addEventListener('click', function(){
    display.textContent  += minus.innerText;
})
multiply.addEventListener('click', function(){
    display.textContent  += multiply.innerText;
})
percent.addEventListener('click', function(){
    display.textContent  += percent.innerText;
})
clear.addEventListener('click', function(){
    display.innerHTML = ''
})

function calculate(e){
    e.preventDefault();
    // console.log(eval(display.innerHTML));
    let calculation = eval(display.innerHTML);
    display.innerHTML = calculation;

    // console.log(2);
    // console.log('1');
}
