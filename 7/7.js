document.getElementById('stringForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputString = document.getElementById('inputString').value;
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        result += inputString[i] + '<br>';
    }

    document.getElementById('result').innerHTML = result;
});
