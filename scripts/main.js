// Create a function that will change the background color of an element every second.
// The color should change randomly from a given set of colors. 
// const colors = ['#ff0000', '#00ff00', '#0000ff'];

function randomBackgroundColor(element) {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
    const intervalId = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.backgroundColor = randomColor;
    }, 1000);

    element.addEventListener('click', (event) => {
        clearInterval(intervalId);
    });
}

const element = document.querySelector('p');
randomBackgroundColor(element);


