document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById('result').textContent = `${number} factorial is ${factorial}.`;
});
