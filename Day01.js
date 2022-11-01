// Single Comment
/** Multiple Comment
 * console.log("TestA");
 * console.log("TestB");
 * */

/////////////////// VARIABLE //////////////////////
// Penampung data pada program
/**
 * Struktur penulisan variable ==> keywordVariable namaVariable = nilaiVariable;
 * 
 * keywordVariable : var, let, const
 * 
 * namaVariable : harus diawali dengan huruf atau diawali symbol "_"/"$", tidak boleh ada spasi
 * 
 * valueVariable : STRING, NUMBER, BOOLEAN, NULL, ARRAY, OBJECT
 */

// keyword var : Redeclare, Reassign 
var nama = "Abdi"; // deklarasi variable dengan value
var nama = "Edo"; // Redeclare ✅
nama = "Andrew"; // Reassign ✅
console.log("var ==>", nama);

// keyword let : Non-redeclare, Reassign
let usia = 27;
// let usia = 30; // Redeclare ❌
usia = 30; // Reassign ✅
console.log("let ==>", usia);

// keyword const : Non-redeclare, Non-reassign
const PI = 3.14;
// const PI = 22/7;  // Redeclare ❌
// PI = 22/7; // Reassign ❌
console.log("const ==>", PI);

//////////////// HOISTING //////////////
x = 10;
console.log(x);
var x;

/////////////////// DATA TYPE ///////////////////
// 1️⃣ STRING : berisi huruf atau character
let namaToko = "Runner '#01' Toko Sepatu"; // double quote
let nama_Toko = 'Runner \'#01\' \nToko Sepatu'; // single quote
let namatoko = `Runner '#01' 
Toko Sepatu`; // backthick

console.log("double quote ==>", namaToko);
console.log("single quote ==>", nama_Toko);
console.log("backthick ==>", namatoko);

let address = "Jl. Sudirman No 45 Jakarta";

// let alamatLengkap = namaToko + " " + address; // cara 1
let alamatLengkap = `Pak eko, ${namaToko} ${address}`; // cara 2

console.log(alamatLengkap);

//////////////////// MUTABLE and IMMUTABLE ///////////////////////
// IMMUTABLE adalah tipe data yang nilainya bersifat tetap (STRING dan NUMBER)
let nama1 = "Kamado";
let nama2 = nama1 + " Tanjiro";

console.log(nama1);
console.log(nama2);
// MUTABLE adalah tipe data yang nilainya bisa berubah (Object dan Array);

////////////////// String Built-in Function /////////////////
let greeting = "Hello, Purwadhika Student";

// typeof : memeriksa tipe data
console.log("typeof ==>", typeof greeting);
console.log("typeof ==>", typeof "hello");

// string.length = menghitung panjang data
console.log("length ==>", greeting.length);

// string.indexOf() = mencari posisi huruf pada string
console.log("indexOf ==>", greeting.indexOf("Purwadhika"));

// string.toUpperCase() = merubah menjadi huruf kapital
console.log("toUpperCase ==>", greeting.toUpperCase());

// string.toLowerCase() = merubah menjadi huruf kecil
console.log("toLowerCase ==>", greeting.toLowerCase());

// string.slice() = mengambil bagian kata tertentu
console.log("slice ==>", greeting.slice(7, 17));

// string.includes() = mengambil bagian kata tertentu
console.log("includes ==>", greeting.includes("Student"));

///////////////// NUMBER ////////////////
let jarak = 1500; // nilai INTEGER
let berat = 60.56; // nilai Desimal atau FLOAT
let saldo = 6e6;

// Arithmetic operator : +, -, /, *, %
let numbA = 20;
let numbB = 15;
let add = numbA + numbB;
let subt = numbA - numbB;
let multi = numbA * numbB;
let div = numbA / numbB;
let mod = numbA % numbB;

console.log(add, subt, multi, div, mod);

// Increment dan Decrement
// posfix form
// console.log(jarak++); // 1500
// console.log(++jarak); // prefix form 1501
jarak++;
// jarak++;
// ++jarak;
console.log(jarak);
// jarak--;
// jarak--;
// console.log(jarak);

/////////// Math Object ////////////
const PI_CIRCLE = Math.PI;

console.log(Math.abs(-25.6)); // 25.6 absolute positif
console.log(Math.abs(-25.6) * -1); // -25.6 absolute negatif

console.log(Math.pow(4, 2)); // pangkat
console.log(Math.sqrt(4)); // akar pangkat 2
console.log(Math.cbrt(4)); // akar pangkat 3

// Pembulatan
console.log(Math.ceil(4.2)); // keatas
console.log(Math.round(4.4)); // terdekat
console.log(Math.floor(4.6)); // kebawah

console.log(Math.min(4, 6, 2, 3, 1, 4, 5, 77, 12));
console.log(Math.max(4, 6, 2, 3, 1, 4, 5, 77, 12));

console.log(Math.random()); // 0.xx s/d 1

// Parsing data
let angka = "123.456";

console.log(typeof angka); // STRING
console.log(parseInt(angka)); // 123
console.log(parseFloat(angka)); // 123.456

let angkaB = 123.456;
console.log(String(angkaB)); // "123.456"
console.log(angkaB.toString()); // "123.456"
let uang = 2000000
console.log(uang.toLocaleString('id')); // "2.000.000"

let addChar = 2 - "1";
console.log(addChar);

////////////////////// Date ////////////////////
const date = new Date();
console.log("Date ==>", date.toLocaleString());

console.log("getHours==>", date.getHours());
console.log("getMinutes==>", date.getMinutes());
console.log("getSeconds==>", date.getSeconds());
console.log("getMilliseconds==>", date.getMilliseconds());
console.log("getDate==>", date.getDate());
console.log("getMonth==>", date.getMonth()); // 0-11
console.log("getFullYear==>", date.getFullYear());
console.log("getTime==>", date.getTime());
console.log("Date.now", Date.now());
console.log("Date.parse", Date.parse(date));





// NAMA FILE EXERCISE :
// DAY01-EXERCISE-NAMA.js