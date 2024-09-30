document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const player1 = parseInt(document.getElementById('player1').value);
    const player2 = parseInt(document.getElementById('player2').value);
    let result;

    if (player1 === player2) {
        result = "It's a tie!";
    } else if ((player1 === 0 && player2 === 2) || (player1 === 1 && player2 === 0) || (player1 === 2 && player2 === 1)) {
        result = "Player 1 wins!";
    } else {
        result = "Player 2 wins!";
    }

    document.getElementById('result').textContent = result;
});
