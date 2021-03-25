// index.js
/*

Author: Edgar Vilchis
Exploring new code concepts with some examples writing
JavaScript Code

Purpose: Use of constants, variables, functions, understanding
the communication with HTML and threading

Date of creation: March 24th, 2021
Last modified: March 25th, 2021

*/

//var a = 'Hello world';
let a = 'Hello world';
//Also we can use const

//Normal function
function b( ) {
    return 'Bye!';
}

//Arrow function
const b1 = ( ) => {
    return 'Bye!!';
}

//Function Expression
//Function declaration
const b2 = function( ) {

}

//Function invocation
//b2( )

//New code 03-25-21
function add(num1, num2){//JS is dynamic
    //Theres no way to use an explicit type like
    //num1: number or int
    return num1 + num2;
}

let result = add( 2,4 );
//let result = add('3', 'steve');
//Output: 3steve ---> no matter the type value
console.log('Result: ', result);

//To help developers with that last thing, the dynamic typing issue,
//there exists typescript