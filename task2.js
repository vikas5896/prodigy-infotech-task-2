let timer;
let isRunning = false;
let lapCount = 1;

function startPause() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startPause").textContent = "Resume";
    } else {
        timer = setInterval(updateDisplay, 1000);
        document.getElementById("startPause").textContent = "Pause";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    lapCount = 1;
    document.getElementById("startPause").textContent = "Start";
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("lapTimes").innerHTML = "";
}

function updateDisplay() {
    const display = document.getElementById("display");
    const time = display.textContent.split(":");
    let hours = parseInt(time[0], 10);
    let minutes = parseInt(time[1], 10);
    let seconds = parseInt(time[2], 10);

    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function lap() {
    if (isRunning) {
        const lapTimes = document.getElementById("lapTimes");
        const newLap = document.createElement("li");
        newLap.textContent = `Lap ${lapCount}: ${document.getElementById("display").textContent}`;
        lapTimes.appendChild(newLap);
        lapCount++;
    }
}