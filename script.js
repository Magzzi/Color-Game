const button = document.getElementById("start");
const musicbutton = document.getElementById("volume")
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function countdown(event) {
    event.preventDefault();

    if (button.disabled) return; // Prevent multiple clicks
    button.disabled = true; // Disable button

    // Play the countdown audio
    const audio = document.getElementById("countdownAudio");
    
    sleep(500).then(() => audio.play());
  
    randomizeColor();
    const colorInterval = setInterval(randomizeColor, 200);

    let count = 3;
    const countdownInterval = setInterval(function() {
        if (count >= 1) {
            button.innerText = count;
            randomizeColor();
            count--;
        } else {
            clearInterval(countdownInterval);
            clearInterval(colorInterval);
            sleep(800).then(() => button.innerText = "Start");
            sleep(1000).then(() =>button.disabled = false);

        }
    }, 800); // Countdown every /3 second
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

function adjustMusic(event){
    event.preventDefault();
    const bg = document.getElementById("backgroundMusic");
    

    if (bg.paused || bg.volume == 0) {
        bg.play();
        bg.volume = 0.1;
        musicbutton.querySelector('img').src = 'images/onvolume.png';
    } else {
        bg.volume = 0;
        musicbutton.querySelector('img').src = 'images/mutevolume.png';
    }
}

button.addEventListener('click', countdown);
musicbutton.addEventListener('click', adjustMusic)



