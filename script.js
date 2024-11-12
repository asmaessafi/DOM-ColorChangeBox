document.addEventListener('DOMContentLoaded', () => {
    var box=document.getElementById('color-box');
    var btn=document.getElementById('change-color-btn');

    function getRandomColor() {
        const hex = Math.floor(Math.random() * 16777215).toString(16);
        return box.style.backgroundColor='#'+hex.padStart(6, '0');
    };

    btn.addEventListener('click',getRandomColor);
}

)