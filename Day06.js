// ********************************
// Object Oriented Programming
// ********************************

// Creating an Object

// cara 1 (object literal syntax)
const kucing = {
    warna: "putih",
    umur: 1,
    beratBadan: 500,
    panjang: {
        ekor: 100,
        kaki: 150
    },
    get warnaKucing() {
        return `Warna kucing adalah ${this.warna}`;
    },
    set ubahWarna(value) {
        this.warna = value;
    }
}

// cara 2 (object constructor syntax)
const person = new Object();

console.log("Kucing => ",kucing);
console.log("Person => ",person);

// Add & Delete Property

// 1. Add
person.nama = "John";
kucing.parfum = "casablanca";

// 2. Delete
delete kucing.warna;


// Accessing Value

// 1. menggunakan dot (.)
const umurKucing = kucing.umur;
console.log("Umur Kucing => ",umurKucing)

// 2. menggunakan []
const beratKucing = kucing["beratBadan"];
console.log("Berat Kucing =>",beratKucing);

// Optional Chaining '?.'
console.log(kucing.panjang?.bulu)

// Accessing Key
console.log(Object.keys(kucing))

// The "for..in" loop
for (const key in kucing) {
    const element = kucing[key]
    console.log(element);
}


// Getter & Setter

console.log(kucing.warnaKucing);
kucing.ubahWarna = "Cokelat";
console.log(kucing.warnaKucing);

// Destructuring Assignment
const number = [1, 2, 3];
const [a, b, c] = number;
console.log("c => ",c);

const myAccount = { username: "John", email: "john@mail.com" }
const { username, email } = myAccount;
console.log("Username => ", username);
console.log("Email => ", email);


// Spread Operator
const dataOne = [23, 55, 76, 45];
const dataTwo = [45, 77, 99, 52];
const spreadData = [...dataOne, ...dataTwo];
console.log("Spread Data => ",spreadData);



// Object Built-In Method

// 1. object assign
let x = 3;
const target = {
    a: x,
    b: 3,
    c: 8,
    d: 7
}
const source = {
    b: 4,
    c: 5
}
const returnTarget = Object.assign(target, source);
console.log("Return Target => ",returnTarget);

// 2. object create
const person2 = {
    isHuman: false,
    printResult: function () {
        console.log(`My name is ${this.name}. Am i human? ${this.isHuman}`);
    }
}
const me = Object.create(person2);
me.isHuman = true;
me.name = "John";
// me.printResult();

// 3. object is
const checkObj = Object.is(1, "abc");
console.log("Check Object Is => ",checkObj);



// Create a Class
// class merupakan sebuah blueprint (template), untuk membuat objek

// 1. expression class
const People = class {
    greeting() {
        console.log("Hello world!");
    }
}

// 2. declaration class
class Cat {
    playing(value) {
        console.log(`Cat is playing ${value}`);
    }
    sleeping() {
        console.log("Cat is sleeping");
    }
}
const cat = new Cat();
cat.playing("Ball");
cat.sleeping();


// Constructor
class Rat {
    color;
    constructor() {
        this.color = "black";
    }
    getColor(newColor) {
        console.log(`Rat color is ${newColor}`)
    }
}
const rat = new Rat();
rat.getColor("white");


// Access Modifier
// 1. public (accessible from anywhere)

// 2. private (accessible only from inside the class)
class Employe {
    name;
    #email;
    constructor(name, email) {
        this.name = name;
        this.#email = email;
    }
    getEmail() {
        console.log(`Employ email is ${this.#email}`)
    }
}
const employe = new Employe("John", "john@mail.com");
console.log("Employe Name => ",employe.name);
console.log("Employe Email => ",employe.email);


// Static Properties
class Car {
    constructor(name){
        this.nama = name;
    }
    static openDoor(){
        return "Open Door...";
    }
}
let car = new Car("Honda");
// console.log(car.openDoor());
console.log(Car.openDoor());


// Encapsulation
class Ongkir {
    pajak= 500;
    constructor(weight){
        this.weight = weight;
    }
    getBiaya(){
        return this.weight * 1000;
    }
    totalBiaya(){
        const total = this.getBiaya();
        return total + this.pajak;
    }
}
const ongkir = new Ongkir(5);
ongkir.pajak = 100;
console.log("Total Biaya => ",ongkir.totalBiaya());

// Inheritance
class Orang{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Profil extends Orang {
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
}
const profil = new Profil("John", 18, "Programmer");
console.log("Name => ",profil.name);
console.log("Age => ",profil.age);
console.log("Job => ",profil.job);