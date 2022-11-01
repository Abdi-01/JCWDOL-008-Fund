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

// TRUTHLY and FALSY
// TRUTHLY
console.log(Boolean(2)); // true
console.log(Boolean("ABC")); // true
console.log(Boolean(true)); // true
console.log(Boolean(-2)); // true
console.log(Boolean(" "));

// FALSY
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));

//////////////////////// CONDITIONAL STATEMENT /////////////////////////
/**
 * Aturan : 
 * 1. Membutuhkan nilai boolean
 * 
 * Jenis :
 * 1. IF STATEMENT : untuk 1 kondisi
 * 2. IF...ELSE STATEMENT : untuk 2 kondisi
 * 3. IF...ELSE IF.....ELSE : untuk banyak kondisi
 * 4. SWITCH...CASE STATEMENT: untuk memastikan nilai suatu value
 */
let nama = "Leonardo", usia = 15, email = "leo@mail.com";

// 1. IF STATEMENT
/**
 * if(condition){
 *      // task
 * }
 */
if (usia >= 17) {
    console.log("Usia lebih dari 17thn");
}

// 2. IF...ELSE STATEMENT
/**
 * if(condition){
 *      // task
 * }else{
 *      // task
 * }
 */

if (usia >= 17) {
    console.log(`Verifikasi usia ${nama} berhasil ✅, periksa email ${email}`);
} else {
    console.log(`Verifikasi usia ${nama} gagal ❌`);
}

// 3. IF...ELSE IF.....ELSE STATEMENT
/**
 * if(condition){
 *      // task
 * }else if(condition2){
 *      // task
 * }else{
 *      // task
 * }
 */

let nilai = 80;

if (nilai > 90) {
    console.log("Grade A", nilai);
} else if (nilai >= 80 && nilai <= 90) {
    console.log("Grade B", nilai);
} else {
    console.log("Grade C", nilai);
}

// 4. SWITCH...CASE STATEMENT
let profesi = "Polisi";
switch (profesi) {
    case "Polisi":
        // task
        console.log("Saya nilang");
        break;
    case "Dokter":
        console.log("Saya mengobati");
        break;
    default:
        console.log("Tidak tau");
        break;
}

// Ternary operator : condition ? nilai : nilai 
let validasi_email = email.includes('@') ? "Email Benar" : "Email Salah";


/////////////////////// LOOP STATEMENT