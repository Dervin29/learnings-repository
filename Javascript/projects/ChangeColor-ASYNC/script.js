const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

// function to generate random color
function changeColor() {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = '#';

    // generate random hex color
    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexColor;
}

 
let interval;

// event listeners for start
startBtn.addEventListener('click', () => {
    // if interval is null then start the interval
    if(!interval){
        interval = setInterval(() => {
            document.body.style.backgroundColor = changeColor();
        }, 1000);
    }
});

// event listener for stop
stopBtn.addEventListener('click', () => {
    // if interval is not null then stop the interval
    clearInterval(interval);
    interval = null;
})