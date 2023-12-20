let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let tingSound = new Audio('ting.mp3');
let backgroundSound = new Audio('music.mp3');
let gameOverSound = new Audio('gameover.mp3')
let input = 'X';
let gameControls = document.getElementById('gameControls');
let winDiv = document.getElementById('gameControls');
let startGameBtn = document.getElementById('start');



startGameBtn.addEventListener('click', () => {
    backgroundSound.play();
})
const printXorO = (element) => {
    element.style.color = 'red';
    tingSound.play();
    if (element.innerText == 'X' || element.innerText == 'O') {
        alert('Already Value Entered');
    }
    else {
        element.innerText = input;
        if (input == 'X') {
            input = 'O';
            element.style.color = 'gold';
        }
        else {
            input = 'X'
        }
    };
    checkWinning();
}
//Checking for winning condition
const checkWinning = () => {
    if (cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText) {
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell4.innerText === cell5.innerText && cell5.innerText === cell6.innerText) {
        winContent(cell4.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell7.innerText === cell8.innerText && cell8.innerText === cell9.innerText) {
        winContent(cell7.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell1.innerText === cell4.innerText && cell4.innerText === cell7.innerText) {
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell2.innerText === cell5.innerText && cell5.innerText === cell8.innerText) {
        winContent(cell2.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell3.innerText === cell6.innerText && cell6.innerText === cell9.innerText) {
        winContent(cell3.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell1.innerText === cell5.innerText && cell5.innerText === cell9.innerText) {
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
    else if (cell3.innerText === cell5.innerText && cell5.innerText === cell7.innerText) {
        winContent(cell3.innerText);
        backgroundSound.pause();
        gameOverSound.play();
    }
}

const winContent = (winner) => {
    gameControls.innerHTML = '';
    // startGameBtn.classList.remove='btn btn-primary';
    let winImage = document.createElement('img');
    winImage.src = "excited.gif";
    let winName = document.createElement('p');
    winName.innerHTML = `Congratulations ${winner}! You won this game.`;
    let restartBtn = document.createElement('button');
    restartBtn.className = "btn btn-outline-dark mt-3";
    restartBtn.id = "restartBtn"
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    })
    winDiv.appendChild(winImage);
    winDiv.appendChild(winName);
    winDiv.appendChild(restartBtn);
    gameControls.appendChild(winDiv);
}
// Restarts the game when clicked on the 'Restart' button
