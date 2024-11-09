const fs = require('fs');
const path = require('path');

function generateTestData(numOfUsers = 5) {  // Domyślnie generujemy 5 użytkowników
  const testData = [];

  for (let i = 0; i < numOfUsers; i++) {
    const user = {
      email: `user_${Date.now()}_${i}@example.com`,
      password: 'Test1234'
    };
    testData.push(user);
  }

  fs.writeFileSync(
    path.join(__dirname, 'cypress', 'fixtures', 'testData.json'),
    JSON.stringify(testData, null, 2)
  );
  console.log("Test data generated:", testData);
}

generateTestData();  // Możesz podać liczbę użytkowników, np. generateTestData(10);