document.getElementById('fizzbuzzForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    for (let num = start; num <= end; num++) {
        let output = '';
        if (num % 3 === 0) output += 'Fizz';
        if (num % 5 === 0) output += 'Buzz';
        if (output === '') output = num;
        resultsDiv.innerHTML += `<p>${output}</p>`;
    }
});
