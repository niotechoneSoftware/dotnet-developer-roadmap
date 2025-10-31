
// JS DATA TYPES
let name = "Yashvi"; // String
let age = 21; // Number
let isStudent = true; // Boolean
let height = null; // Null
let weight; // Undefined
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("id"); // Symbol

console.log("Data Types:");
console.log("typeof " + typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof height); // object (known quirk)
console.log(typeof weight); // undefined
console.log(typeof bigNumber); // bigint
console.log(typeof id); // symbol

console.log("-----------------------------------------------");

//  JS OBJECT
const student = {
    name: "Yashvi",
    age: 21,
    course: "Computer Science",
    isEnrolled: true
};
console.log("Object:");
console.log(student);
console.log("Student name:", student.name);

console.log("-----------------------------------------------");

//  JS ARRAY
const courses = ["HTML", "CSS", "JavaScript", "Bootstrap"];
console.log("Array:");
console.log(courses);
console.log("First course:", courses[0]);

console.log("-----------------------------------------------");

//  JS ASSIGNMENT & ARITHMETIC
let x = 10;
let y = 3;

console.log("Assignment & Arithmetic:");
console.log("x = ", x, ", y = ", y);
x += 5; // x = x + 5
console.log("After x += 5, x = ", x);

console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus:", x % y);
console.log("Exponent:", x ** y);

console.log("-----------------------------------------------");

//  JS COMPARISON
console.log("Comparison:");
console.log("Is x > y?", x > y);
console.log("Is x < y?", x < y);
console.log("Is x == '15'?", x == "15"); // true (loose equality)
console.log("Is x === '15'?", x === "15"); // false (strict equality)
console.log("Is x != y?", x != y);

console.log("-----------------------------------------------");

// JS LOGICAL OPERATORS
console.log("Logical Operators:");
let hasID = true;
let passedExam = false;

console.log("hasID && passedExam:", hasID && passedExam); // false
console.log("hasID || passedExam:", hasID || passedExam); // true
console.log("!hasID:", !hasID); // false

//  Combining multiple conditions
if (student.age >= 18 && student.isEnrolled) {
    console.log("Student is eligible for college");
} else {
    console.log("Student is NOT eligible");
}