 // console.log(images);
 let images = [];
 img = document.querySelectorAll('img');
 for (let i = 0; i < img.length; i++) {
     images.push(img[i]);
 }
//  console.log(images);

 document.querySelector('.next').addEventListener('click', e => {
     for(let i = 0; i<images.length; i++){
         for(let j = 0; j<i.length; j++){
             if(images[i].classList.contains('on')){
                 images[i].classList.remove('on');
                 images[i+1].classList.add('on');
             }
             break
            }
    }
 })

//  document.querySelector('.next').click()