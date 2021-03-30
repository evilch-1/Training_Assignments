"use strict";
// console.log('Hello world!');
//Primitive type
//let xyz = 'Steve';
//Implicitly typing
//DONT do this, writing implicit code is not a good practice
//xyz = 21;
//console.log(xyz);
//Primitive types
var myName = 'Steve';
var myAge = 21;
var hasJob = true;
var color = 'white';
//Reference types
//Array
var myHobbies = ['cooking', 'baseball'];
//Tuples
var myAddress = ['Park street', 23];
//Enum
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myColor = Color.Red;
//Function
function sayHello(name) {
    //return 'Hello $(name)';
    console.log('Hello');
}
sayHello('Steve');
//let result: string = sayHello('Steve');
function sayAnotherHello(nameTwo) {
    return 'Hello $(nameTwo)';
}
var result = sayAnotherHello('Steve');
function print() {
    console.log('Printing...');
}
print();
function multiply(num1, num2) {
    return num1 * num2;
}
multiply(12, 13);

function PrintMe(data) {
    return 'Hello $(data)';
}
//Function type
var greetings;
//greetings = PrintMe;
greetings = sayAnotherHello;
greetings('Steve');
var user = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking', 'baseball'],
    print: function (data) {
        console.log(data);
    }
};
//let userData: { name: string, age: number, hobbies: string[], print: (x: string) => void };
//userData = user;
var userData;
userData = user;
