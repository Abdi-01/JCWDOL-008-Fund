// ADVANCED TOPIC : SYNCHRONOUS vs ASYNCHRONOUS

// SYNCHRONOUS
// console.log('Program 1');
// console.log('Program 2');
// console.log('Program 3');

// // ASYNCHRONOUS
// console.log('ASYNC Program 1');
// setTimeout(() => console.log('Program 2'), 3000);
// console.log('ASYNC Program 3');

// // CALLBACK
// function add(a, b, cbfn) {
//     let result = a + b;
//     cbfn(result)
// }

// function print(data) {
//     console.log(data);
// }

// // let result = add(10, 25);
// // print(result);

// add(35, 12, (res) => console.log(`Hasil penjumlahan ${res}`));

// NESTED CALLBACK
const download = (url, callback) => {
    console.log(`Download process ${url}...`);
    let count = 0
    for (let i = 0; i < 1000; i++) {
        count++;
    }
    if (count == 1000) {
        callback(url);
    }
}

const notify = (url) => {
    console.log(`Download from ${url} ✅`);
}

let url1 = 'https://gdrive.com';
let url2 = 'https://spotify.com';
let url3 = 'https://youtube.com';

// Single Callback
download(url1, notify);

// NESTED CALLBACK
download(url1, () => {
    download(url2, () => {
        download(url3, () => {
            // CALLBACK HELL
            console.log(`Download Complete All`)
        })
    })
});

// PROMISE

let progress = 0;
const downloadPromise = new Promise((resolve, reject) => {
    while (progress < 100) {
        progress++;
    }
    if (progress == 100) {
        resolve('Download Complete ✅');
    } else {
        reject('Download FAILED ❌');
    }
});

// PROMISE HANDLER : then(cbfn), catch(cbfn), finally(cbfn)
downloadPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

// Promise.all
const downloadStart = (url) => {
    return new Promise((resolve, reject) => {
        let progress = 0;
        while (progress < 25) {
            progress++;
        }
        if (progress == 25) {
            resolve(`Download Complete ${url} ${progress}%`);
        } else {
            reject('Download FAILED ❌');
        }
    })
};
const downloadHalf = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 50) {
        progress++;
    }
    if (progress == 50) {
        resolve(`Download Complete ${progress}%`);
    } else {
        reject('Download FAILED ❌');
    }
});
const downloadFinish = new Promise((resolve, reject) => {
    let progress = 0;
    while (progress < 100) {
        progress++;
    }
    if (progress == 100) {
        resolve(`Download Complete ${progress}%`);
    } else {
        reject('Download FAILED ❌');
    }
});

Promise.all([downloadStart, downloadHalf, downloadFinish]).then((result) => {
    console.log(result);
})