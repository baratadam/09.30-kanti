document.getElementById('yearForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const year = parseInt(document.getElementById('year').value);
    let isLeapYear;

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    document.getElementById('result').textContent = isLeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`;
});
