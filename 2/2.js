document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);
    const seconds = parseInt(document.getElementById('seconds').value);

    if (hours >= 0 && minutes >= 0 && seconds >= 0 && hours < 24 && minutes < 60 && seconds < 60) {
        const totalSecondsInDay = 24 * 3600;
        const elapsedSeconds = (hours * 3600) + (minutes * 60) + seconds;
        const remainingSeconds = totalSecondsInDay - elapsedSeconds;
        document.getElementById('result').textContent = `A nap hátralévő másodpercei: ${remainingSeconds}`;
    } else {
        document.getElementById('result').textContent = 'Kérlek, adj meg érvényes értékeket!';
    }
});
