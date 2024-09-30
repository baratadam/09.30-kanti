document.getElementById('digitForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;
    const digits = Array.from(String(number), Number);
    const average = digits.reduce((a, b) => a + b, 0) / digits.length;
    document.getElementById('result').textContent = `The average of digits is ${average}.`;
});
