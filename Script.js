/*
Scott Sandilands 
CITP-4316
Programming Project 2
*/
document.getElementById("startButton").addEventListener("click", function() {
    let time = parseInt(document.getElementById("timeInput").value);
    if (isNaN(time) || time < 1 || time > 60) {
        alert("Please enter a value between 1 and 60");
        return;
    }

    let countdownElement = document.getElementById("countdown");
    countdownElement.textContent = time;

    let timer = setInterval(function() {
        time--;
        countdownElement.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Time's up";
        }
    }, 1000);
});
