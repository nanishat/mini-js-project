document.querySelectorAll('.game-play').forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.textContent);
    });
});

document.getElementById('clear').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    localStorage.removeItem('score');
    console.log('reset score: ', score);
});

score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0
};

function playGame(guess) {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    if (result === 'heads') {
        score.wins += 1;
    } else {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    console.log(guess === result ? 'You win!' : 'You lose!');
    console.log(score);
}