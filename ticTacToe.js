let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');
let cell3 = document.getElementById('cell3');
let cell4 = document.getElementById('cell4');
let cell5 = document.getElementById('cell5');
let cell6 = document.getElementById('cell6');
let cell7 = document.getElementById('cell7');
let cell8 = document.getElementById('cell8');
let cell9 = document.getElementById('cell9');
let gameUI = document.getElementsByClassName('game')[0];
let tingSound = new Audio('ting.mp3');
let backgroundSound = new Audio('music.mp3');
let gameOverSound = new Audio('gameover.mp3')
let input = 'X';
let gameControls = document.getElementsByClassName('gameControls')[0];
let startGameBtn = document.getElementById('start');
let turnHeading = document.createElement('h2');
let audioPlayPauseSrcValue = 'audio';

let allCellFilled = '';

const audioPlayPause=()=>{
    if (audioPlayPauseSrcValue == 'audio') {
        document.getElementById('audioPlayPause').src = 'Noaudio-50.png';
        backgroundSound.pause();
        audioPlayPauseSrcValue = 'noAudio'
    }
    else {
        document.getElementById('audioPlayPause').src = 'audio-50.png';
        backgroundSound.play();
        audioPlayPauseSrcValue = 'audio';
    }
}

startGameBtn.addEventListener('click', () => {
    Array.from(document.querySelectorAll('#row1 td')).forEach((element) => {
        element.setAttribute('onclick', 'printXorO(this)');
        // console.log(element);
    });
    Array.from(document.querySelectorAll('#row2 td')).forEach((element) => {
        element.setAttribute('onclick', 'printXorO(this)');
        // console.log(element);
    })
    Array.from(document.querySelectorAll('#row3 td')).forEach((element) => {
        element.setAttribute('onclick', 'printXorO(this)');
        // console.log(element);
    })
    document.getElementById('audioPlayPause').setAttribute('onclick','audioPlayPause()');
    backgroundSound.play();
    turn();
})

const printXorO = (element) => {
    element.style.color = 'white';
    if (element.innerText == 'X' || element.innerText == 'O') {
        alert('Already Value Entered!');
    }
    else {
        element.innerText = input;
        if (input == 'X') {
            input = 'O';
            element.style.color = 'white';
        }
        else {
            input = 'X';
        }
    };
    tingSound.play();
    turn();
    checkCellValue();
    checkDrawMatch();
    checkWinning();
}

const turn = () => {
    gameControls.innerHTML = '';
    turnHeading.innerText = `Now turn for "${input}"`;
    gameControls.appendChild(turnHeading);
}

//Checking for winning condition
const checkWinning = () => {
    if (cell1.innerText === cell2.innerText && cell2.innerText === cell3.innerText) {
        cell1.style.color = 'aqua';
        cell2.style.color = 'aqua';
        cell3.style.color = 'aqua';
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell4.innerText === cell5.innerText && cell5.innerText === cell6.innerText) {
        cell4.style.color = 'aqua';
        cell5.style.color = 'aqua';
        cell6.style.color = 'aqua';
        winContent(cell4.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell7.innerText === cell8.innerText && cell8.innerText === cell9.innerText) {
        cell7.style.color = 'aqua';
        cell8.style.color = 'aqua';
        cell9.style.color = 'aqua';
        winContent(cell7.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell1.innerText === cell4.innerText && cell4.innerText === cell7.innerText) {
        cell1.style.color = 'aqua';
        cell4.style.color = 'aqua';
        cell7.style.color = 'aqua';
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell2.innerText === cell5.innerText && cell5.innerText === cell8.innerText) {
        cell2.style.color = 'aqua';
        cell5.style.color = 'aqua';
        cell8.style.color = 'aqua';
        winContent(cell2.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell3.innerText === cell6.innerText && cell6.innerText === cell9.innerText) {
        cell3.style.color = 'aqua';
        cell6.style.color = 'aqua';
        cell9.style.color = 'aqua';
        winContent(cell3.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell1.innerText === cell5.innerText && cell5.innerText === cell9.innerText) {
        cell1.style.color = 'aqua';
        cell5.style.color = 'aqua';
        cell9.style.color = 'aqua';
        winContent(cell1.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
    else if (cell3.innerText === cell5.innerText && cell5.innerText === cell7.innerText) {
        cell3.style.color = 'aqua';
        cell5.style.color = 'aqua';
        cell7.style.color = 'aqua';
        winContent(cell3.innerText);
        backgroundSound.pause();
        gameOverSound.play();
        afterWonEleDisable();
    }
}

const winContent = (winner) => {
    // gameUI.style.backgroundImage = `url('https://media.istockphoto.com/id/1344490984/video/colorful-confetti-and-flags-animation-with-alpha-channel-and-luma-matte-party-or-birthday.jpg?s=640x640&k=20&c=X_-8X7qc9i5YTBRGx8AfloSPh-Q4o0m6WOELO3ulrsw=')`;
    // gameUI.style.backgroundSize='cover';
    document.getElementById('result').innerText = `Congratulations ${winner}! You won this game.`;
    gameControls.innerHTML = '';
    let restartBtn = document.createElement('button');
    restartBtn.className = "btn btn-outline-light mt-1";
    restartBtn.id = "restartBtn";
    restartBtn.textContent = "Restart Game";
    restartBtn.addEventListener('click', () => {
        window.location.reload();
    })
    gameControls.appendChild(restartBtn);

}

const checkCellValue = () => {
        if ((cell1.innerText == 'X' || cell1.innerText == 'O') 
        && (cell2.innerText == 'X' || cell2.innerText == 'O') 
        && (cell3.innerText == 'X' || cell3.innerText == 'O')
        && (cell4.innerText == 'X' || cell4.innerText == 'O')
        && (cell5.innerText == 'X' || cell5.innerText == 'O')
        && (cell6.innerText == 'X' || cell6.innerText == 'O')
        && (cell7.innerText == 'X' || cell7.innerText == 'O')
        && (cell8.innerText == 'X' || cell8.innerText == 'O')
        && (cell9.innerText == 'X' || cell9.innerText == 'O')) {
            allCellFilled='filled';
        }
        else{
            allCellFilled='';
        }
}

const checkDrawMatch = () => {
    if (allCellFilled == 'filled') {
        document.getElementById('result').innerText = 'The match ended in a draw!';
        backgroundSound.pause();
        gameOverSound.play();
        gameControls.innerHTML = '';
        let restartBtn = document.createElement('button');
        restartBtn.className = "btn btn-outline-light mt-1";
        restartBtn.id = "restartBtn";
        restartBtn.textContent = "Restart Game";
        restartBtn.addEventListener('click', () => {
            window.location.reload();
        })
        gameControls.appendChild(restartBtn);
    }
};

const afterWonEleDisable = () => {
    Array.from(document.querySelectorAll('#row1 td')).forEach((element) => {
        element.removeAttribute('onclick');
        console.log(element);
    });
    Array.from(document.querySelectorAll('#row2 td')).forEach((element) => {
        element.removeAttribute('onclick');
        console.log(element);
    })
    Array.from(document.querySelectorAll('#row3 td')).forEach((element) => {
        element.removeAttribute('onclick');
        console.log(element);
    })
}

