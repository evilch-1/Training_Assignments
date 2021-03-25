/*

Author: Edgar Vilchis
Exploring new code concepts with some examples writing
JavaScript Code (reference types)

Purpose: Primitive and reference types exploration
Important concepts about memory and how it is passed to memory
a dynamic type and how is it changing while mutating properties
are accesing to that type.

Date of creation: March 25th, 2021
Last modified: March 25th, 2021

*/

//primitive type
let a = 3;
let b;

b = a; //b = 3
a = 2; // a = 2

console.log(a);
console.log(b);

//reference type
let a1 = { greeting: 'Hi' };
let b1;

b1 = a1; //b1 = { greeting: 'Hi'}

//Changing the greeting to Hello:
a1.greeting = 'Hello'; //a1 = { greeting: 'Hello'}
//Very important:
//NOW, BOTH a1 and b1 are pointing to Hello because of the dynamic type


console.log(a1);
console.log(b1);