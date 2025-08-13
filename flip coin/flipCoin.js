const headsBtn = document.querySelector('.js-heads-btn');
const tailsBtn = document.querySelector('.js-tails-btn');
const displayMoves = document.querySelector('.js-moves');
const displayResult = document.querySelector('.js-result');
const displayScores = document.querySelector('.js-score');
const clearBtn = document.querySelector('.js-clear-btn');

//clear-button
clearBtn.addEventListener('click', clearButtonFeature);

//parse-&-assigning-values
score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};

//event-listener-handler
headsBtn.addEventListener('click', () => {
    playGame('heads');
});

tailsBtn.addEventListener('click', () => {
    playGame('tails');
});


function playGame(playerPick) {
    //computer-moves
    const randomNumber = Math.random();
    let computerPick = randomNumber < 0.5 ? 'heads' : 'tails';

    //checks-logic
    if (playerPick === computerPick) {
        score.losses += 1;
    } else {
        score.wins += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    displayMoves.innerHTML = `You ${playerPick} - ${computerPick} Computer`;
    displayResult.innerHTML = (playerPick === computerPick ? 'You lose!' : 'You win!');
    displayScores.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
}

function clearButtonFeature() {
    score.wins = 0;
    score.losses = 0;
    localStorage.removeItem('score');
    displayMoves.innerHTML = '';
    displayResult.innerHTML = `Your score has been reset`;
    displayScores.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
}