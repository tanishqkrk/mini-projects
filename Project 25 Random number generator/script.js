let from = document.querySelector('#from');
let to = document.querySelector('#to');
let submit = document.querySelector('#submit');
let check = document.querySelector('#check')
let number = document.querySelector('.number');

submit.addEventListener('click', random);

function random(e){
    e.preventDefault();

    if(from == null && to == null){
        alert('Enter valid value');
    }
    else{
        if(check.checked == true){
            let randomNumber = Math.random()*(parseInt(to.value)-parseInt(from.value))+parseInt(from.value);
            // console.log(randomDecNumber);
            let randomD = randomNumber.toFixed(2);
            number.innerHTML = randomD;
        }
        else if(check.checked == false){
            let randomNumber = Math.floor(Math.random()*(parseInt(to.value)-parseInt(from.value))+parseInt(from.value));
            // number.innerHTML = randomNumber;
            // console.log(randomNumber);
            number.innerHTML = randomNumber;
        }
    }

    
}

check.addEventListener('click', move);
function move(e){
    document.querySelector('.circle').classList.toggle(('circle-active'));
}