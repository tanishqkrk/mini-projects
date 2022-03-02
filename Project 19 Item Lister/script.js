// let button = document.getElementsByClassName('lister-items-item');
// for(let i = 0; i<button.length; i++){
//     button[i].style.background = 'red';
//     console.log(button[i]);
// }

// let newDiv = document.createElement('div');
// newDiv.className = 'Ssup';
// newDiv.id = 'Ssup';
// newDiv.innerText = "Ssup";
// console.log(newDiv);
// let lister = document.querySelector('.lister-items-items');
// console.log(lister);
// let listerItems = document.querySelector('.lister-items-item');
// console.log(listerItems);


// lister.insertBefore(newDiv, listerItems)

// newDiv.style.fontSize = '50px'
// console.log(document.querySelector('.lister-items'));

function myClick(){
    // console.log('Bruh');
    newItem = document.createElement('li');
    newItem.innerText = 'NewElement!';
    newItem.className = 'lister-items-item';
    // console.log(newItem);

    listContainer = document.querySelector('.lister-items-items');
    listContainerElement = document.querySelector('.lister-items-item');
    // console.log(listContainerElement);

    listContainer.insertBefore(newItem, listContainerElement);
}