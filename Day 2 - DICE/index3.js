const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.getElementById('dice');
const btnNew = document.getElementById('btn-new-game');
const btnRoll = document.getElementById('btn-roll');
const btnHold = document.getElementById('btn-hold');

let score0, score1, currentScore, activePlayer, playing;

const init = function () {
  score0 = 0;
  score1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.remove('hidden');
  diceEl.src = 'dice-1.jpeg';

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
      break;
  }
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  switch (playing) {
    case true:
      const dice = Math.trunc(Math.random() * 6) + 1;
      diceEl.src = `DIE${dice}.jpg`;
      diceEl.classList.remove('hidden');
      switch (dice) {
        case 1:
          switchPlayer();
          break;
        default:
          currentScore += dice;
          document.getElementById(`current--${activePlayer}`).textContent = currentScore;
          break;
      }
      break;
    default:
      break;
  }
});

btnHold.addEventListener('click', function () {
  switch (playing) {
    case true:
      switch (activePlayer) {
        case 0:
          score0 += currentScore;
          score0El.textContent = score0;
          switch (true) {
            case score0 >= 50:
              playing = false;
              diceEl.classList.add('hidden');
              player0El.classList.add('player--winner');
              player0El.classList.remove('player--active');
              break;
            default:
              switchPlayer();
              break;
          }
          break;
        case 1:
          score1 += currentScore;
          score1El.textContent = score1;
          switch (true) {
            case score1 >= 50:
              playing = false;
              diceEl.classList.add('hidden');
              player1El.classList.add('player--winner');
              player1El.classList.remove('player--active');
              break;
            default:
              switchPlayer();
              break;
          }
          break;
      }
      break;
    default:
      break;
  }
});

btnNew.addEventListener('click', init);
