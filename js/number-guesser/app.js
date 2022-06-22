let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

// play again event 


game.addEventListener('mousedown', e => {
    if (e.target.matches('.play-again')) window.location.reload();
});






// Listen For Guess

guessBtn.addEventListener("click", () => {
    let guess = parseInt(guessInput.value);

    // validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`just between ${min} and ${max}`, 'red');
    }

    // check if win
    if (guess === winningNum){
       gameOver(true, `${winningNum} is correct! YOU WIN`)
    } else {
        guessesLeft -= 1;

        if (guessesLeft === 0){
           gameOver(false, `GAME OVER, The correct number was ${winningNum}`);
        } else {
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left!`, 'red');
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
        }
    }
});


function gameOver(won, msg){
    let color ;
    won === true ? color = 'green' : color = 'red';
    setMessage(msg);
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color  = color;


    // play again??
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// get winnig num

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1));
}

function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}