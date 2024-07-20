let score = {
    totalguess: 0,
    win: 0,
    lose: 0
};

function updateScoreTable() {
    const tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>Total Guesses</th>
                    <th>Wins</th>
                    <th>Loses</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${score.totalguess}</td>
                    <td>${score.win}</td>
                    <td>${score.lose}</td>
                </tr>
            </tbody>
        </table>
    `;
    document.getElementById('scoretable').innerHTML = tableHtml;
}

function flip() {
    var randomNumber = Math.random();
    let coin = randomNumber < 0.5 ? 'heads' : 'tails';
    return coin;
}

function makeGuess(g) {
    let guess = g;
    const coin = flip();
    if (guess == coin) {
        document.getElementById('result').innerHTML = `You win<br><br>Your guess is "${g}"<br>Real result is "${coin}"`;
        score.totalguess += 1;
        score.win += 1;
    } else {
        document.getElementById('result').innerHTML = `You lose<br><br>Your guess is "${g}"<br>Real result is "${coin}"`;
        score.totalguess += 1;
        score.lose += 1;
    }
    updateScoreTable();
}

function resetScore() {
    score = {
        totalguess: 0,
        win: 0,
        lose: 0
    };
    document.getElementById('result').innerHTML = '';
    updateScoreTable();
}

// Initialize score table
updateScoreTable();
