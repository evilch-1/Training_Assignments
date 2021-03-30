// index.ts
/*

Author: Edgar Vilchis
Exploring new code concepts with some examples writing
TypeScript Code

Purpose: Use of primitive, reference and object types with
TypeScript code

IMPORTANT: For the meanwhile, this file is from reference, so it
isn't called on index.html (It's not possible)

Date of creation: March 30th, 2021
Last modified: March 30th, 2021

*/

//Implicitly typing
//DONT do this, writing implicit code is not a good practice
//xyz = 21;

//console.log(xyz);

//Primitive types
let myName: string = 'Steve';
var myAge: number = 21;
let hasJob = true;
let color: any = 'white';

//Reference types
//Array
let myHobbies: string[] = ['cooking', 'baseball'];

//Tuples
let myAddress: [string, number] = ['Park street', 23];

//Enum
enum Color {
    Grey,
    Green = 100,
    Red
}
let myColor: Color = Color.Red;

//Function
function sayHello( name: string ): void{
    //return 'Hello $(name)';
    console.log('Hello');
}

sayHello('Steve');
//let result: string = sayHello('Steve');

function sayAnotherHello( nameTwo: String ): string{
    return 'Hello $(nameTwo)';
}

let result: string = sayAnotherHello('Steve');

function print ( ): void {
    console.log('Printing...');
}

print( );

function multiply( num1: number, num2: number ): number {
    return num1 * num2;
}

multiply(12, 13);

function PrintMe( data: string ): string {
    return 'Hello $(data)';
}

//Function type
let greetings: (a: string) => string;
//greetings = PrintMe;
greetings = sayAnotherHello;
greetings('Steve');

//End of reference types

//Object

type Complex = { name: string, age: number, hobbies: string[], print: (x: string) => void };

let user: Complex = {
    name: 'Steve',
    age: 21,
    hobbies: ['cooking', 'baseball'],
    print: function(data: string): void{
        console.log(data);
    }
}

//let userData: { name: string, age: number, hobbies: string[], print: (x: string) => void };
//userData = user;
let userData: Complex;
userData = user;
