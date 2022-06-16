let input = document.querySelector('.input');
let icon = document.querySelector('label');
icon.addEventListener('click', e => {
    input.classList.toggle('inputOn');
    icon.classList.toggle('labelOn');
    if (input.classList.contains('inputOn')) {
        input.placeholder = 'Search'
    } else {
        input.placeholder = '';
        input.value = '';
    }
})