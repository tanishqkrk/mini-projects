let usernameField = document.querySelector('#username');
let passwordField = document.querySelector('#password');
let button = document.querySelector('button');
let form = document.querySelector('.form');

const username = 'honeybun';
const password = 'buttercup';

form.addEventListener('submit', unlockPage);

function unlockPage(e){
    if(usernameField.value != username || passwordField.value != password){
        alert("Wrong username/password");
        // console.log('1');
    }
    else if(usernameField.value == username || passwordField.value == password){
        e.preventDefault();
        form.style.display = 'none';
        document.querySelector('body > *:not(.form)').style.filter = 'blur(0)';
        document.querySelector('body > *:not(.form)').style.opacity = '1';
        document.querySelector('body > *:not(.form)').style.userSelect = 'initial';

    }
}