document.getElementById('squareForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const size = parseInt(document.getElementById('size').value);
    let result = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (i === j || i + j === size - 1) {
                result += '%';
            } else {
                result += ' ';
            }
        }
        result += '\n';
    }

    document.getElementById('result').textContent = result;
});
