let score = 0;
const box = document.getElementById("box");
const scoreDisplay = document.getElementById("score");
const gameContainer = document.getElementById("game-container");

function moveBox() {
    let x = Math.floor(Math.random() * (gameContainer.clientWidth - box.clientWidth));
    let y = Math.floor(Math.random() * (gameContainer.clientHeight - box.clientHeight));
    box.style.left = x + "px";
    box.style.top = y + "px";
}

box.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

moveBox();