document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const range = parseInt(document.getElementById('range').value);
    let result = '';
    let count = 0;

    for (let i = 1; i <= range; i++) {
        if (i % 3 === 0) {
            count++;
            if (count === 1 || count === 2 || count === 3) {
                if (count === 3) count = 0;
                continue;
            }
        }
        result += i + ', ';
    }

    document.getElementById('result').textContent = result.slice(0, -2);
});
