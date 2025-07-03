const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;

const checkFunc = () => {
    const guess = Number(guessInput.value);
    if (!guess) {
        message.textContent = '🚫 No number!';
    }
    else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        number.textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        number.style.width = '30rem';
        if (currentScore > highScore) {
            highScore = currentScore;
            highscore.textContent = highScore;
        }
    }
    else if (guess !== secretNumber) {
        if (currentScore > 1) {
            message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            currentScore--;
            score.textContent = currentScore;
        } else {
            message.textContent = 'You lost the game!';
            score.textContent = 0;
            document.body.style.backgroundColor = 'red';
            
}

        }
    }


checkButton.addEventListener('click', checkFunc);

againButton.addEventListener('click', function() {
    currentScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message.textContent = 'Start guessing...';
    score.textContent = currentScore;
    number.textContent = '?';
    guessInput.value = '';
    document.body.style.backgroundColor = '#222'; 
    
});
