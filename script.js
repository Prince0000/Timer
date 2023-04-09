// Get the timer digits
const hoursTens = document.querySelector(".hours-tens");
const hoursOnes = document.querySelector(".hours-ones");
const minutesTens = document.querySelector(".minutes-tens");
const minutesOnes = document.querySelector(".minutes-ones");
const secondsTens = document.querySelector(".seconds-tens");
const secondsOnes = document.querySelector(".seconds-ones");
const millisecondsTens = document.querySelector(".milliseconds-tens");
const millisecondsOnes = document.querySelector(".milliseconds-ones");

// Get the buttons and lap times list
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");
const lapButton = document.querySelector("#lapButton");
const lapTimesList = document.querySelector("#lapTimesList");

// Initialize the timer values
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let i = 0;

// Keep track of the interval
let interval;

// Update the timer every millisecond
function updateTimer() {
  miliseconds++;
  if (miliseconds >= 100) {
    miliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
}

// Update the timer digits
hoursTens.textContent = Math.floor(hours / 10);
hoursOnes.textContent = hours % 10;
minutesTens.textContent = Math.floor(minutes / 10);
minutesOnes.textContent = minutes % 10;
secondsTens.textContent = Math.floor(seconds / 10);
secondsOnes.textContent = seconds % 10;
millisecondsTens.textContent = Math.floor(miliseconds / 10);
millisecondsOnes.textContent = miliseconds % 10;
}

// Start the timer
function startTimer() {
interval = setInterval(updateTimer, 10);
startButton.disabled = true;
pauseButton.disabled = false;
resetButton.disabled = false;
lapButton.disabled = false;
}

// Pause the timer
function pauseTimer() {
clearInterval(interval);
startButton.disabled = false;
pauseButton.disabled = true;
lapButton.disabled = true;
}

// Reset the timer
function resetTimer() {
clearInterval(interval);
hours = 0;
minutes = 0;
seconds = 0;
miliseconds = 0;
i=0;
hoursTens.textContent = "0";
hoursOnes.textContent = "0";
minutesTens.textContent = "0";
minutesOnes.textContent = "0";
secondsTens.textContent = "0";
secondsOnes.textContent = "0";
millisecondsTens.textContent = "0";
millisecondsOnes.textContent = "0";
startButton.disabled = false;
pauseButton.disabled = true;
resetButton.disabled = true;
lapButton.disabled = true;
lapTimesList.innerHTML = "";
}

// Add a lap time
function addLapTime() {
  i++;
const lapTime = document.createElement("li");
lapTime.textContent = i+". ) "+`${hoursTens.textContent}${hoursOnes.textContent}:${minutesTens.textContent}${minutesOnes.textContent}:${secondsTens.textContent}${secondsOnes.textContent}.${millisecondsTens.textContent}${millisecondsOnes.textContent}`;
lapTimesList.appendChild(lapTime);
}

// Add event listeners to the buttons
startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", addLapTime);