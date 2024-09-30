document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputString = document.getElementById('inputString').value;
    let result = '';

    for (let char of inputString) {
        if (!/[a-zA-Z]/.test(char)) {
            break;
        }
        result += char;
    }

    document.getElementById('result').textContent = result;
});
