window.addEventListener("DOMContentLoaded", main);

let timeoutRef;

function main() {
    //Start på programmet 
    timeoutRef = setTimeout(changeBackgroundColor, 2000);
    setupEventListeners();
}

function changeBackgroundColor() {
    document.body.style.background = getRandomColor();
}

function setupEventListeners() {
   const cancelTimeoutButton = document.getElementById("cancelTimeoutButton");
   cancelTimeoutButton.addEventListener("click", startBackgroundChangeInterval)

   const startIntervalButton = document.getElementById("startTimeoutButton");
   startIntervalButton.addEventListener("click", startBackgroundChangeInterval)
}

function cancelBackgroundChange() {
    clearTimeout(timeoutRef);
}

function startBackgroundChangeInterval() {
    setInterval(changeBackgroundColor, 1000);
}

function getRandomColor() {
    const value = Math.random();

    if (value <0.2) {
        return "blue";
    }   else if (value < 0.4) {
        return "red";
    }   else if (value < 0.6) {
        return "green";
    }   else if (value < 0.8) {
        return "grey";
    }   else {
        return "pink";
    }
}



