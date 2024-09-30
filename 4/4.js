document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const score = parseFloat(document.getElementById('score').value);
    let grade;

    if (score >= 85) {
        grade = 'A';
    } else if (score >= 70) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'C';
    } else if (score >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').textContent = `Your grade is: ${grade}`;
});
