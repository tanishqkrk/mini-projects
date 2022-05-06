document.querySelector('.a').addEventListener('mousemove', e=>{
    document.querySelector('.cursor').style.display = 'block'; 
    document.querySelector('.cursor').style.left = `${e.clientX - 55}px`
    document.querySelector('.cursor').style.top = `${e.clientY - 80}px`;
    document.querySelector('.cursor').style.background = 'red';
    document.querySelector('.cursor').style.boxShadow = '0px 0px 100px red';


})
document.querySelector('.a').addEventListener('mouseleave', e=>{
    document.querySelector('.cursor').style.display = 'none';
})
document.querySelector('.b').addEventListener('mousemove', e=>{
    document.querySelector('.cursor').style.display = 'block'; 
    document.querySelector('.cursor').style.left = `${e.clientX - 55}px`
    document.querySelector('.cursor').style.top = `${e.clientY - 80}px`
    document.querySelector('.cursor').style.background = 'blue';
    document.querySelector('.cursor').style.boxShadow = '0px 0px 100px blue';
})
document.querySelector('.b').addEventListener('mouseleave', e=>{
    document.querySelector('.cursor').style.display = 'none';
})


// window.addEventListener('mousemove', e=>{
//     document.querySelector('.cursor').style.display = 'block'; 
//     document.querySelector('.cursor').style.left = `${e.clientX - 55}px`
//     document.querySelector('.cursor').style.top = `${e.clientY - 80}px`
// })
