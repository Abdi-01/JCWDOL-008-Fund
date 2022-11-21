// Install jest : npm install -g jest

// Format penamaan file testing
// Cara 1 : namaFile.test.js --> paling umum digunakan
// Cara 2 : namaFile.spec.js

// Import function
const { add, multiple } = require('./Day12');

// Format code
// test('title_testing',()=>{
//     // write testing code
//     expect(fungsi_testing).keywordMatching();
// });

// keywordMatching()
// .toBe(value) : apakah output yg diberikan sesuai dengan yg diharapkan, utk primitive data type
// .toEqual(value) : apakah output yg diberikan sesuai dengan yg diharapkan, utk non-primitive data type

// Running testing file from terminal
// jest --config=config.json file.test
test('Test add function', () => {
    // Correct
    expect(add(10, 5)).toBe(15);
});

test('Test add function Wrong', () => {
    // wrong
    expect(add(10, 5)).toBe(6);
});

test('Test multiple function', () => {
    expect(multiple(10, 5)).toBe(50);
});

