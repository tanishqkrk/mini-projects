let form = document.querySelector('.lister');
let submit = document.querySelector('.lister-submit');
let list = document.querySelector('.lister-lister');

form.addEventListener('submit', addItem);


function addItem(e){
    e.preventDefault();
    // console.log(1);
    let input = document.querySelector('.lister-input').value;
    // console.log(input);
    newItem = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type','button')
    deleteBtn.className = 'lister-delete'
    deleteBtn.innerText = 'X'
    newItem.className = 'lister-item';
    newItem.innerHTML = input;
    newItem.appendChild(deleteBtn)
    // console.log(newItem);
    list.appendChild(newItem);
    deleteBtn.addEventListener('click', removeItem);
    form.reset()
}

let deleteBtn = document.querySelector('.lister-delete');
function removeItem(e){
    if(confirm('Are you sure?')){

        e.target.parentNode.remove();
    }
    // console.log('1');
    // e.parentElement.style.display = 'none';
}