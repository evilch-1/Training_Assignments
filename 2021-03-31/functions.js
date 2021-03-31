"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
//Normal function
function print() {
    console.log('Printing...');
}
print();
//Function expression
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
addNumbers(1, 2);
//Arrow function
var multiplyNumbers = function (num1, num2) {
    if (num2 === void 0) { num2 = 2; }
    return num1 * num2;
};
multiplyNumbers(2); //We can leave just one parameter because of the default parameter at num2
//We can also use just the arrow in one single line of code
var multiplyNumbersTwo = function (num1, num2) { return num1 * num2; };
multiplyNumbersTwo(2, 4);
//--------------------------------------------------
// Spread operator (Arrays and Objects)
var numbers = [2, 12, 14, 16];
//Number duplicated using the dynamic type
var numbersDup = __spreadArray([], numbers);
var object = { name: 'Steve', age: 21 };
var objectDup = __assign({}, object);
function save(obj) {
    //mutate or modify
    obj.name = 'Tom';
    //Save obj to db
}
//save ( object );
save(__assign({}, object));
//we can also pass a copy right here... there's no need to mutate
//objects everywhere, it can only be in certain moments
// Destructuring Operator (Arrays and Object)
var myHobbiesTwo = ['baseball', 'cooking'];
//const hobby1 = myHobbiesTwo[0];
//console.log(hobby1);
//const hobby2 = myHobbiesTwo[1];
//console.log(hobby2);
//Now, using destructuring:
var hobby1 = myHobbiesTwo[0], hobby2 = myHobbiesTwo[1];
var userData2 = { name: 'Steve', age: 21 };
//const userName = userData2.name;
//const userAge = userData2.age;
var userAge = userData2.age, userName = userData2.name;
//console.log(userData2.name);
//--------------------------------------------------------
//Template literals (string)
var userName3 = 'Steve';
var greeting = 'Hello' + userName3;
console.log(greeting);
var greeting2 = "Hello " + userName3 + ", I'm cool!"; //alt Gr + } for ``
console.log(greeting2);
