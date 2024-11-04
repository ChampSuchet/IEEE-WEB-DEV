const watch = document.getElementById("display"); // Target the correct display
let timer = null;
let starttime = 0;
let elapsedtime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starttime = Date.now() - elapsedtime;
        timer = setInterval(update, 10);  // Update the display every 10ms
        isRunning = true;
    }
}

function end() {
    if (isRunning) {
        clearInterval(timer);  // Stop the timer
        isRunning = false;
    }
}

function reset1() {
    clearInterval(timer);  // Stop the timer
    starttime = 0;  // Reset the start time
    elapsedtime = 0;  // Reset elapsed time
    isRunning = false;
    watch.textContent = "00:00:00:00";  // Reset the display
}

function update() {
    const currentTime = Date.now();
    elapsedtime = currentTime - starttime;

    let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedtime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedtime / 1000) % 60);
    let milliseconds = Math.floor((elapsedtime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    watch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;  // Update display
}
