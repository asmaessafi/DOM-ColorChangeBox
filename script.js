document.addEventListener('DOMContentLoaded',function(){
    var box=document.getElementById('color-box');
    var btn=document.getElementById('change-color-btn');

    function getRandomColor() {
    
    let red=Math.ceil(Math.random()*255)
    let green=Math.ceil(Math.random()*255)
    let blue=Math.ceil(Math.random()*255)
        return box.style.backgroundColor="rgb("+red+','+green+','+blue+')'
    // const hex = Math.floor(Math.random() * 16777215).toString(16);
    // return box.style.backgroundColor='#'+hex.padStart(6, '0');
    };

    btn.addEventListener('click',getRandomColor);
})
