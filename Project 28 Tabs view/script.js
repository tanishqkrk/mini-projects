let goku = document.querySelector('.tab1');
let vegeta = document.querySelector('.tab2');
let broly = document.querySelector('.tab3');
goku.addEventListener('click',e=>{
    document.body.style.background = 'url(./assets/goku.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'space';
    goku.style.borderBottom = '8px solid red';
    vegeta.style.borderBottom = 'none';
    broly.style.borderBottom = 'none';
    document.querySelector('.card').innerText = 'Goku';
    document.querySelector('.tabs').style.backgroundColor = 'rgb(115, 100, 255)';
})
vegeta.addEventListener('click',e=>{
    document.body.style.background = 'url(./assets/vegeta.jpeg)';
    document.body.style.backgroundSize = '';
    document.body.style.backgroundRepeat = 'space';
    vegeta.style.borderBottom = '8px solid red';
    goku.style.borderBottom = 'none';
    broly.style.borderBottom = 'none';
    document.querySelector('.card').innerText = 'Vegeta';
    document.querySelector('.tabs').style.backgroundColor = 'purple';
})
broly.addEventListener('click',e=>{
    document.body.style.background = 'url(./assets/broly.png)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'space';
    broly.style.borderBottom = '8px solid red';
    goku.style.borderBottom = 'none';
    vegeta.style.borderBottom = 'none';
    document.querySelector('.card').innerText = 'Broly';
    document.querySelector('.tabs').style.backgroundColor = 'green';  
})