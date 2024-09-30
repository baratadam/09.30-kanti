document.getElementById('cuboidForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (length > 0 && width > 0 && height > 0) {
        const volume = (length * width * height).toFixed(2);
        const surfaceArea = (2 * (length * width + width * height + height * length)).toFixed(2);
        document.getElementById('result').textContent = `A téglatest térfogata: ${volume} m³, felszíne: ${surfaceArea} m²`;
    } else {
        document.getElementById('result').textContent = 'Kérlek, adj meg érvényes értékeket!';
    }
});
