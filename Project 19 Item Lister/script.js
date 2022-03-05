let lister = document.querySelector('.lister');
let button = document.querySelector('.lister-input-button');
// console.log(button);
button.addEventListener('submit', buttonSubmit);

function buttonSubmit(e){
    e.preventDefault();
    console.log('1');
}