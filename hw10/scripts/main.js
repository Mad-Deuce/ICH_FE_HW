let div1 = document.querySelector('#div1');
div1.classList.add('bg-init');

function classToggle() {
    div1.classList.toggle('bg-init');
    div1.classList.toggle('bg-new');
}

div1.addEventListener('mouseover', () => {
    classToggle();
});

div1.addEventListener('mouseout', () => {
    classToggle();
});



//------------------------------------------------------------------------------------
let div2 = document.querySelector('#colorBlock');
let btn = document.querySelector('#colorButton');
btn.addEventListener('click', () => {

    let rColor = Math.floor(Math.random() * (255 - 0) + 0);
    let gColor = Math.floor(Math.random() * (255 - 0) + 0);
    let bColor = Math.floor(Math.random() * (255 - 0) + 0);

    div2.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
});