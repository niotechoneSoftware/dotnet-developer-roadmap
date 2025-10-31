function greet(name) {
    document.getElementById("demo").innerHTML = "Hello, " + name + "!";
}


function addNumbers(a, b) {
    return a + b;
}


function calculateArea(length, width) {
    return length * width;
}


greet("Yashvi");

let sum = addNumbers(8, 5);
document.getElementById("sum").innerHTML = "Sum is: " + sum;


let area = calculateArea(7, 4);
document.getElementById("area").innerHTML = "Area is: " + area;

function demo(name, age) {
    return "Hello " + name + "! Your age is " + age;
}
document.getElementById("dd").innerHTML = demo("Yashvi", 21);

function Parameter(x, y) {
    if (y === undefined) {
        y = 2
    }
    return x * y;
}
document.getElementById("multiplication").innerHTML = Parameter(5);

function sum1(x, y = 3) {
    return x + y;
}
document.getElementById("addition").innerHTML = sum1(4);

function rest(...args) {
    let rest = 0;
    for (let arg of args) rest += arg;
    return rest;
}
let x = rest(3, 46, 68, 12, 56)
document.getElementById("demo1").innerHTML = x;

function findmax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];

        }
    }
    return max;
}
document.getElementById("demo2").innerHTML = findmax(3, 52, 45);

myfunction = (a, b) => a * b;
let result = myfunction(6, 2);
document.getElementById("demo3").innerHTML = "The Number Is: " + result;


if (true) {
    var a = 10;
    let b = 20;
    const z = 30;
}
console.log(a);
// console.log(y);  Error
// console.log(z);  Error


let car = "volvo";
myfun();
function myfun() {
    document.getElementById("demo4").innerHTML = "I car display " + car;
}




const out = document.getElementById("output");
const log = (msg) => {
    console.log(msg);
    out.innerHTML += msg + "<br>";
};

// Regular Functions
function add(a, b) {
    return a + b;
}
function greet(name) {
    return `Hello, ${name}`;
}

//  Arrow Functions
const addArrow = (a, b) => a + b;
const greetArrow = name => `Hello, ${name}`;

log("Regular add: " + add(5, 3));
log("Arrow add: " + addArrow(5, 3));
log("Regular greet: " + greet("Alice"));
log("Arrow greet: " + greetArrow("Bob"));

// var, let, const scope test
function testScope() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";
        log("Inside block (var): " + varVariable);
        log("Inside block (let): " + letVariable);
        log("Inside block (const): " + constVariable);
    }
    log("Outside block (var): " + varVariable);
    try {
        log("Outside block (let): " + letVariable);
    } catch (e) {
        log("Outside block (let): ERROR - " + e);
    }
    try {
        log("Outside block (const): " + constVariable);
    } catch (e) {
        log("Outside block (const): ERROR - " + e);
    }
}

testScope();