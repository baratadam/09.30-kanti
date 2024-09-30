document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mass = parseFloat(document.getElementById('mass').value);
    const height = parseFloat(document.getElementById('height').value);
    console.log(mass)
    console.log(height)
    if (mass > 0 && height > 0) {
        const bmi = (mass / (height * height));
        document.getElementById('result').innerHTML = `A BMI értéked: ${bmi}`;
    } else {
        document.getElementById('result').textContent = 'Kérlek, adj meg érvényes értékeket!';
    }
});