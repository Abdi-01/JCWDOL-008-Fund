// OBJECT REVIEW
// Create Object
// Cara 1 : Syntax Object Literal
let data = {
    name: 'Abdi',
    age: 25
}

console.log(data.name);
console.log(data.age);

// Cara 2 : Syntax "new" Object
let student = new Object();
student.name = 'Andrew';
student.score = 90;
console.log(student);
let prop = Object.keys(student);
console.log(prop);
console.log(student[prop[0]]);
console.log(student['name']);

let getValue = Object.values(student);
console.log(getValue);

for (const key in student) {
    console.log(key);
}

// SPREAD OPERATOR
let mobil = {
    name: 'Supra',
    brand: 'Toyota',
    mechine: 'V8',
    cc: 5000
}

console.log(mobil);
let mobilSport = { ...mobil };
console.log(mobilSport);
mobilSport.price = 555000000;
console.log(mobilSport);
console.log(mobil);

// Destructring
let { price, mechine } = mobilSport;
console.log(price, mechine);

let arr = [1, 2, 3];
console.log(arr);
let [a, b, c] = arr;
console.log(a, b, c);

data = [
    {
        name: 'Avanza',
        brand: 'Toyota',
        mechine: 'DOHC',
        cc: 1500
    },
    {
        name: 'Supra',
        brand: 'Toyota',
        mechine: 'V8',
        cc: 5000
    },
    {
        name: 'ERTIGA',
        brand: 'Suzuki',
        mechine: 'DOHC',
        cc: 1550
    }
];

let print = (data, cbfn) => {
    let temp = '';
    for (let i = 0; i < data.length; i++) {
        if (cbfn) {
            if (cbfn(data[i])) {
                temp += `${i + 1}. ${data[i].brand} ${data[i].name} with ${data[i].mechine} ${data[i].cc.toLocaleString()}\n`
                break
            }
        }else{
            temp += `${i + 1}. ${data[i].brand} ${data[i].name} with ${data[i].mechine} ${data[i].cc.toLocaleString()}\n`
        }
    }
    return temp;
}

function filterName(obj){
    return obj.name == 'ERTIGA';
}

console.log(print(data, filterName));