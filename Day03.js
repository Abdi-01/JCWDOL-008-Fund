// Kelipatan 3 --> Bizz
// Kelipatan 5 --> Buzz
// Kelipatan 3 dan 5 --> BizzBuzz

// let limit = 35;

// for (let i = 1; i <= limit; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("BizzBuzz ==>", i)
//     } else if (i % 5 == 0) {
//         console.log("Buzz ==>", i)
//     } else if (i % 3 == 0) {
//         console.log("Bizz ==>", i)
//     }
// }

















// let lmt = 90;
// for (let val = 1; val <= lmt; val++) {
//     if (val % 5 == 0 && val % 3 == 0) {
//         console.log("BizzBuzz =>", val)
//     } else if (val % 3 == 0) {
//         console.log("Bizz =>", val)
//     } else if (val % 5 == 0) {
//         console.log("Buzz =>", val)
//     }
// }

let kata = "Purwadhika"


let vokal = ''
let konsonan = ''
for (let i = 0; i < kata.length; i++) {
    //mengecek apakah huruf pada index i berupa huruf vokal
    if (kata.charAt(i).toLowerCase() == 'a' || kata.charAt(i).toLowerCase() == 'i' || kata.charAt(i).toLowerCase() == 'u' || kata.charAt(i).toLowerCase() == 'e' || kata.charAt(i).toLowerCase() == 'o') {
        //mengecek varible prnampung huruf vokal apakah meiliki huruf vokal yg terdeteksi
        if (!vokal.includes(kata.charAt(i).toLowerCase())) {//tanda ! menandakan reverse value awalnya true ==> false
            //jika huruf vokal yg terdeteksi tidak ada pada variable penampung, maka huruf tersebut ditambahkan
            vokal += kata.charAt(i).toLowerCase()
        }
    } else if (!konsonan.includes(kata.charAt(i).toLowerCase()) && kata.charAt(i) != " ") {
        konsonan += kata.charAt(i).toLowerCase()
    }
}
console.log(`
    Kalimat = ${kata}
    Huruf vokal = ${vokal}
    Huruf konsonan = ${konsonan}
    `)