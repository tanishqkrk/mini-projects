let from = document.querySelector('#from');
let to = document.querySelector('#to');
let submit = document.querySelector('#submit');
let check = document.querySelector('#check')
let number = document.querySelector('.number');

submit.addEventListener('click', random);

function random(e){
    e.preventDefault();
    if(check.checked == true){
        let randomNumber = (Math.random()*parseFloat( to.value )+parseFloat( from.value));
        // console.log(randomDecNumber);
        let randomD = randomNumber.toFixed(2);
        number.innerHTML = randomD;
    }
    else if(check.checked == false){
        let randomNumber = Math.floor(Math.random()*(to.value) + from.value+1);
        // number.innerHTML = randomNumber;
        // console.log(randomNumber);
        number.innerHTML = randomNumber;
    }
}

check.addEventListener('click', move);
function move(e){
    document.querySelector('.circle').classList.toggle(('circle-active'));
}