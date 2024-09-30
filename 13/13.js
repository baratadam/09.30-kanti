document.getElementById('divisorsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (let num = start; num <= end; num++) {
        let divisors = [];
        let i = 1;
        while (i <= num) {
            if (num % i === 0) {
                divisors.push(i);
            }
            i++;
        }
        resultsDiv.innerHTML += `<p>${num}: ${divisors.join(', ')},</p>`;
    }
});
