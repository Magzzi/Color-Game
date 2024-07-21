const button = document.getElementById("start");
const red = "#e22e2e";
const blue = "#0b55de";
const yellow = "#efce16";
const white = "#ffffff";
const purple = "#8a2be2";
const green = "#3cb371";

const colors = [red, blue, yellow, white, purple, green];

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function countdown(event) {
    event.preventDefault();

    let count = 3;
    const countdownInterval = setInterval(function() {
        if (count >= 1) {
            button.innerText = count;
            count--;
        } else {
            clearInterval(countdownInterval);
            button.innerText = "Start";

            randomizeColor();
        }
    }, 750); // Countdown every /3 second
}


function randomizeColor() {
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");

    const allBox = [box1, box2, box3];

    for (let i = 0; i < 3; i++) {
        const colorNum = randomIntFromInterval(0, 5);
        allBox[i].style.backgroundColor = colors[colorNum];
    }
}

button.addEventListener('click', countdown);