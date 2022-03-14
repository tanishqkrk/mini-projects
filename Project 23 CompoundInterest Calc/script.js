document.querySelector('#calculator').addEventListener('submit', calc);

function calc(e){
    e.preventDefault();
    let final = (document.querySelector('#principal').value)*(document.querySelector('#rate').value)*(document.querySelector('#time').value)/100;
    document.querySelector('.output').innerText = final
}