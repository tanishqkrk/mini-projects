// Function for Ham Menu
function hamTrigger(e){
    let hamBtn = document.querySelector('.ham');
    let hamMenu = document.querySelector('.hammenu');
    let hamLine = document.querySelectorAll('.hamline')
    hamBtn.addEventListener('click', e=>{
        hamMenu.classList.toggle('ham-on');
        for(let i = 0; i<hamLine.length; i++){
            hamLine[i].classList.toggle('hamLineOn')
        }
    })
}
hamTrigger();
