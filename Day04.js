///////////////////////////// ARRAY //////////////////////////////
/**
 * Definisi : Suatu tipe data yang berisi sekumpulan data, bisa bertipe sama atau berbeda.
 *            Setiap data memiliki alamat index yang dimulai dari 0.
 * Tujuan : mempermudah pengelolaan data
 * Array itu ditandai dengan bracket kurung siku [data0, data1, data2...]
 * */

let buah1 = 'Apel';
let buah2 = 'Apel';
let buah3 = 'Apel';

let buah =["Apel", "Semangka", "Jeruk"]; // Cara 1
console.table(buah);
let stock = Array(15,10,25); // Cara 2
console.table(stock);
let harga = []; // Cara 3
harga[0]=20000;
harga[1]=15000;
harga[2]=8000;
// harga[10]=7000;

console.log(harga[7]);

/////////////////////////// ARRAY FUNCTION ///////////////////////
// array.length : menghitung jumlah data yang ada pada array
// Output dari func length bertipe NUMBER
console.log("Banyak data buah ==>", buah.length);
console.log("Banyak data stock ==>", stock.length);
console.log("Banyak data harga ==>", harga.length);

console.log(`1. ${buah[0]}, Stoknya=${stock[0]}, Rp. ${harga[0]}`)
var print = "";
for (let i = 0; i < buah.length; i++) {
    print += `${i + 1}. ${buah[i]}, Stoknya = ${stock[i]}, Rp. ${harga[i]}\n`;
};

console.log(print);

// array.push(data) : menambahkan data di akhir array
buah.push('Melon');
stock.push(12);
harga.push(16000);

console.table(buah);

// array.pop() : menghapus data terakhir pada array
buah.pop();
console.log(buah);

// array.unshift(data) : menambahkan data di awal array
buah.unshift("Alpukat");
console.log(buah);

// array.shift() : menghapus data awal array
buah.shift();
console.log(buah);

// array.splice(indexAwal, jumlhDataYangDihapus, dataBaru)
// Mode 1 : menghapus data
stock.splice(2,1);
console.log(stock);

// Mode 2 : menyisipkan data
buah.splice(1, 0, 'Buah Naga', 'Manggis' );
console.table(buah);

// Mode 3 : mengganti data
buah.splice(2, 1, 'Rambutan');
console.table(buah);

// array.includes(data) : memeriksa suata data apakah ada atau tidak
console.log(buah.includes('Apel'));

// array.indexOf(data) : untuk mencari index dari suatu data
console.log(buah.indexOf('Jeruk'));

// array.reverse() : membalikkan urutan data
console.table(buah.reverse());

// array.join("separator") : menggabungkan data array menjadi string
console.log(buah.join(" "));

// Penggabungan data array
let motor = ["CBR150", "WR155", "VARIO160"];
let mobil = ["HR-V", "IGNIS", "VELOZ"];

let kendaraan = motor.concat(mobil,'Jetsky');
console.table(kendaraan);

// Spread operator
let transportasi = [...motor, ...mobil, 'Kereta', 'Pesawat'];
console.table(transportasi); 

// Array 2 Dimensi : Array didalam array
let kelasIPA = [ 
    ["Aldo","SAINS","A"],
    ["Edo","BIOLOGI","B"],
    ["Budi","EGLISH","F"],
];

console.log(kelasIPA[0][0]);

var print = "";
for (let i = 0; i < kelasIPA.length; i++) {
    print += `${i + 1}. ${kelasIPA[i][0]}, Pelajaran ${kelasIPA[i][1]}, Nilainya ${kelasIPA[i][2]}\n`;
};

console.log(print);

/////////////////////////// FUNCTION //////////////////////////
/**
 * - Sekumpulan program yang ditujukan untuk menyelesaikan proses tertentu
 * - Bersifat re-usable sehingga bisa digunakan berulang
 * - Built-in function
 * - User-defined function
 *      - Declarative function
 *          - function namaFunc(argument1...){ 
 *                  // task 
 *            }
 *      - Function expression
 *          - var namaFunc = function (argument1...){ 
 *                  // task 
 *            }
 *      - Arrow Function
 *          - var namaFunc = (argument1...) => { 
 *                  // task 
 *            }
 *  */ 

// input
let numbA =200;
let numbB = 75;

// pemroses --> function
function penjumlahan (arg1, arg2){
    let hasil = arg1+arg2;
    return hasil;
};

// media output
console.log(penjumlahan(30, 20));
