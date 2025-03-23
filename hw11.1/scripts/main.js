let btn = document.querySelector('#btn');
let countMsg = document.querySelector('#count-msg');
let outputMsg = document.querySelector('#output-msg');
let cnt = 0;

btn.addEventListener('click', (event) => {

    cnt++;
    countMsg.classList.toggle('bg-white');
    countMsg.classList.toggle('bg-green');
    countMsg.innerHTML = `Clicks: ${cnt}`;

    if (cnt % 5 === 0) {
        let rColor = Math.floor(Math.random() * (255 - 0) + 0);
        let gColor = Math.floor(Math.random() * (255 - 0) + 0);
        let bColor = Math.floor(Math.random() * (255 - 0) + 0);
        document.body.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
    }
    if (cnt === 10) {
        outputMsg.innerHTML = 'Congratulations! You have reached 10 clicks!';
    }

});