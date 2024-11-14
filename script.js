document.addEventListener('DOMContentLoaded', () => {
    var box=document.getElementById('color-box');
    var btn=document.getElementById('change-color-btn');

    function getRandomColor() {
    
    let red=Math.ceil(Math.random()*255)
    let green=Math.ceil(Math.random()*255)
    let blue=Math.ceil(Math.random()*255)
        return box.style.backgroundColor=`rgb(${red},${green},${blue})`;
    
    };

    btn.addEventListener('click',getRandomColor);
})
