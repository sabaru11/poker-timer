// ➕➖ Level
function increaseLevel() {
    level++;
    timeLeft = levelTime;
    warned = false;
    playLevelUpSound();
    updateBlind();
    updateDisplay();
    saveState();
}

function decreaseLevel() {
    if (level > 1) {
        level--;
        timeLeft = levelTime;
        warned = false;
        updateBlind();
        updateDisplay();
        saveState();
    }
}

// ⏩⏪ เวลา
function addTime() {
    timeLeft += 10;
    updateDisplay();
    saveState();
}

function fastForward() {
    timeLeft -= 10;

    if (timeLeft <= 0) {
        level++;
        timeLeft = levelTime;
        warned = false;
        playLevelUpSound();
        updateBlind();
    }

    updateDisplay();
    saveState();
}

// 💾 Save
function saveState() {
    localStorage.setItem("level", level);
    localStorage.setItem("timeLeft", timeLeft);
}

// 🔄 Load
window.onload = function() {
    let savedLevel = localStorage.getItem("level");
    let savedTime = localStorage.getItem("timeLeft");

    if (savedLevel) level = parseInt(savedLevel);
    if (savedTime) timeLeft = parseInt(savedTime);

    updateBlind();
    updateDisplay();
};
