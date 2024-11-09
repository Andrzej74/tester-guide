const fs = require('fs');
const path = require('path');

// Wczytaj dane testowe z pliku
const testDataPath = path.join(__dirname, 'cypress', 'fixtures', 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));

// Przykład czyszczenia danych lokalnie (np. z pliku)
function deleteTestData() {
  fs.unlinkSync(testDataPath); // Usunięcie pliku testData.json
  console.log("Test data removed.")
}

deleteTestData();

