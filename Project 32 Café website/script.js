// Function for Ham Menu
function hamTrigger(e) {
    hamBtn.addEventListener('click', e => {
        hamMenu.classList.toggle('ham-on');
        for (let i = 0; i < hamLine.length; i++) {
            hamLine[i].classList.toggle('hamLineOn')
        }
    })
}
hamTrigger();

function foodSwitch(e) {
    // console.log("foodSwitch called");
    burgerBtn.addEventListener('click', x => {
        burger.style.display = 'flex';
        pizza.style.display = 'none';
        iceCream.style.display = 'none';
        shakes.style.display = 'none';
        burgerBtn.classList.add('menu-item-active')
        pizzaBtn.classList.remove('menu-item-active')
        iceCreamBtn.classList.remove('menu-item-active')
        shakesBtn.classList.remove('menu-item-active')

    })
    pizzaBtn.addEventListener('click', x => {
        // debugger;
        pizza.style.display = 'flex';
        burger.style.display = 'none';
        iceCream.style.display = 'none';
        shakes.style.display = 'none';
        burgerBtn.classList.remove('menu-item-active')
        pizzaBtn.classList.add('menu-item-active')
        iceCreamBtn.classList.remove('menu-item-active')
        shakesBtn.classList.remove('menu-item-active')
        // console.log('1');
        // console.log({pizza,burger,iceCream,shakes});
    })
    iceCreamBtn.addEventListener('click', x => {
        iceCream.style.display = 'flex';
        burger.style.display = 'none';
        pizza.style.display = 'none';
        shakes.style.display = 'none';
        burgerBtn.classList.remove('menu-item-active')
        pizzaBtn.classList.remove('menu-item-active')
        iceCreamBtn.classList.add('menu-item-active')
        shakesBtn.classList.remove('menu-item-active')
    })
    shakesBtn.addEventListener('click', x => {
        shakes.style.display = 'flex';
        burger.style.display = 'none';
        pizza.style.display = 'none';
        iceCream.style.display = 'none';
        burgerBtn.classList.remove('menu-item-active')
        pizzaBtn.classList.remove('menu-item-active')
        iceCreamBtn.classList.remove('menu-item-active')
        shakesBtn.classList.add('menu-item-active')
    })
}
foodSwitch();

function counter(e) {
    for (let i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', e => {
            number[i].value++
        })
    }
    for (let i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', e => {
            if (number[i].value > 0) {
                number[i].value--
            }
        })
    }
}
counter();