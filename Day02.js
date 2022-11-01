//////////////////// BOOLEAN //////////////////
let benar = true;
let salah = false;

// Comparison Operator : >, <, >=, <=, ==, ===, !=
let angkaA = 20;
let angkaB = 15;
console.log("Comparison a > b:", angkaA > angkaB);
console.log("Comparison a < b:", angkaA < angkaB);
console.log("Comparison a <= b:", angkaA <= angkaB);
console.log("Comparison a >= b:", angkaA >= angkaB);
console.log("Comparison a != b:", angkaA != angkaB);
console.log("Comparison a == b:", angkaA == "20");
console.log("Comparison a === b:", angkaB === "15");

// Logical Operator : AND(&&), OR(||), NOT(!)

// AND : akan menghasilkan nilai TRUE apabila semua nilai yang di gunakan bernilai TRUE
console.log("Logic AND :", true && true);
console.log("Logic AND :", true && false);
console.log("Logic AND :", false && false);

// OR : akan menghasilkan nilai TRUE apabila salah satu bernilai TRUE
console.log("Logic OR :", true || true);
console.log("Logic OR :", false || true);
console.log("Logic OR :", false || false);

// NOT
console.log("Logic NOT :", !true);
console.log("Logic NOT :", !false);