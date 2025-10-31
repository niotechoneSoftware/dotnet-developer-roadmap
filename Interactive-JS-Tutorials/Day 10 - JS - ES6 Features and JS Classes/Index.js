// Helper function to print on webpage
function print(msg) {
    document.getElementById("output").innerHTML += msg + "<br>";
}

//  let & const
let counter = 0;
const pi = 3.14159;

//   Arrow Functions
const add = (a, b) => a + b;
const square = x => x * x;

//   Objects with shorthand & template literals
const user = {
    name: "Yashvi",
    age: 21,
    greet() {
        print(`Hi, I'm ${this.name}, and I am ${this.age} years old.`);
    }
};

//   Classes with Constructor & Method
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        print(`I'm ${this.name}, ${this.age} years old.`);
    }
}

//  Inheritance
class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    study() {
        print(`${this.name} is studying ${this.major}.`);
    }
}

class GraduateStudent extends Student {
    constructor(name, age, major, thesis) {
        super(name, age, major);
        this.thesis = thesis;
    }
    research() {
        print(`${this.name} is researching on "${this.thesis}".`);
    }
}

//build class (person + student)
print("Add: " + add(5, 7));
print("Square: " + square(6));

user.greet();

const p1 = new Person("jahi", 25);
p1.introduce();

const s1 = new Student("Maya", 22, "Computer Science");
s1.introduce();
s1.study();

const g1 = new GraduateStudent("Yashvi", 21, "AI", "Data Science");
g1.introduce();
g1.study();
g1.research();



class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

// Arrow function
const sayHello = name => `Hello ${name}`;

const p = new Person1("Yashvi", 21);
console.log(sayHello("Yashvi"));
p.greet();

//class Inheritance
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.Model = mod;
    }
    show() {
        return this.present() + ' , It is a ' + this.Model + '.';

    }
}
const mycar = new Model("BMW", "Ford");
document.getElementById("demo5").innerHTML = mycar.show();

//getters and setters

class my {
    constructor(brand) {
        this.carname = brand;

    }
    get cname() {
        return this.carname;
    }
    set cname(x) {
        this.carname = x;
    }
}
const mycc = new my("BMW");
document.getElementById("demo6").innerHTML = mycc.cname;