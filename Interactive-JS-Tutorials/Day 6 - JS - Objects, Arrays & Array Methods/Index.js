
let car = { type: "volvo", color: "white", weight: 900 };
document.getElementById("car").innerHTML = "Car:" + car.type;


const obj = { counter: 0 };
Object.defineProperty(obj, "reset", {
    get: function () { this.counter = 0; }
});
Object.defineProperty(obj, "Increment", {
    get: function () { this.counter++; }
});
Object.defineProperty(obj, "Decrement", {
    get: function () { this.counter--; }
});
Object.defineProperty(obj, "add", {
    set: function (value) { this.counter += value; }
});
Object.defineProperty(obj, "subtract", {
    set: function (value) { this.counter -= value; }
});
obj.reset;
obj.add = 6;
obj.subtract = 1;
obj.Increment;
obj.Decrement;
document.getElementById("demo").innerHTML = obj.counter;




// Creating an Object
const person = {
    firstName: "Yashvi",
    lastName: "Dhaduk",
    age: 22,
    hobbies: ["reading", "coding", "traveling"],

    // Method: function inside an object
    fullName: function () {
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.hobbies;
    },

    // Another method
    greet: function () {
        return "Hello, my name is " + this.fullName() + ".";
    }
};

// Accessing properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.age);
console.log(person.hobbies[1]);

// Calling methods
console.log(person.fullName());
console.log(person.greet());

// Create an array
let fruits = ["apple", "banana", "cherry"];
console.log("Initial:", fruits);

// push() - add to end
fruits.push("mango");
console.log("After push:", fruits);

// pop() - remove last
fruits.pop();
console.log("After pop:", fruits);

// unshift() - add to start
fruits.unshift("lemon");
console.log("After unshift:", fruits);

// shift() - remove first
fruits.shift();
console.log("After shift:", fruits);

// splice() - remove and insert
fruits.splice(1, 1, "kiwi", "orange");
console.log("After splice:", fruits);

// slice() - copy part of array
let citrus = fruits.slice(1, 3);
console.log("Sliced:", citrus);

// indexOf()
console.log("Index of kiwi:", fruits.indexOf("kiwi"));

// includes()
console.log("Has banana?", fruits.includes("banana"));

// length
console.log("Length:", fruits.length);

let student = {
    name: "Anita",
    age: 20,
    subjects: ["Math", "Science", "English"],
    introduce: function () {
        return `Hi, I'm ${this.name} and I study ${this.subjects.join(", ")}.`;
    }
};

console.log(student.name);
console.log(student.subjects[1]);
console.log(student.introduce());      