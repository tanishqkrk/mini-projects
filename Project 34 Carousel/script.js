document.querySelector('.next').addEventListener('click', next)
document.querySelector('.previous').addEventListener('click', back)

// document.querySelector('.next').click()

function next(e) {
    // let state = 300;
    document.querySelector('.container').scrollBy(170, 0);
    // state += 20
    // break;
}

function back(e) {
    document.querySelector('.container').scrollBy(-170, 0);

}