let ham = document.querySelector('.hammenu');
let one = document.querySelector('.ham1');
let two = document.querySelector('.ham2');
let three = document.querySelector('.ham3');
let menu = document.querySelector('.elements');
let items = document.querySelectorAll('.element');


ham.addEventListener('click', toggleMenu);

function toggleMenu(e){
    // console.log('1');
    menu.classList.toggle('ham-on');
    one.classList.toggle('ham1-toggle');
    two.classList.toggle('ham2-toggle');
    three.classList.toggle('ham3-toggle');
    for(let i = 0; i<items.length; i++){
        items[i].classList.toggle('element');
        }
}