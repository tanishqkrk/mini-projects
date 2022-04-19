window.addEventListener('mousemove',e=>{
    // console.log(e.clientX, e.clientY)
    document.querySelector('.cursor').style.left = `${e.clientX - 50}px`;    
    document.querySelector('.cursor').style.top = `${e.clientY -50}px`;    
})