"use strict";
// generics.ts
/*
Author: Edgar Vilchis
Exploring new code concepts with some examples writing
TypeScript Code and reviewing some GENERICS concepts

Purpose: Use of Generics, understanding why to use a Generic,
learning when to use a Generic

Date of creation: April 6th, 2021
Last modified: April 6th, 2021

*/
//Generics - Separate logic from type
function echo(data) {
    return data;
}
echo('string');
echo(21);
echo(true);
echo({ name: 'Steve', age: 21 });
//generic function
function betterEcho(data) {
    return data;
}
betterEcho('hello');
betterEcho(21);
betterEcho(true);
betterEcho({ name: 'Steve', age: 21 });
var myHobbies5 = ['cooking', 'baseball'];
var myHobbies6 = ['cooking', 'baseball'];
var myHobbies7 = [12, 15];
var myHobbies8 = [true, false];
var myHobbies9 = [{}, {}];
var Collection = /** @class */ (function () {
    function Collection() {
    }
    Collection.prototype.add = function (data) {
        console.log(data);
    };
    return Collection;
}());
var obj10 = new Collection();
obj10.add('hello');
var obj11 = new Collection();
obj11.add(21);
//We can also constraint the way to use a generic as <T>:
//class Collection<T extends string | number> {
//It can also be an object
//class Collection<T extends {name: string, age: number} | {name: string, address: string}> {
//Also as a type
//type myTypeGen = {name: string, age: number};
//class Collection<T extends myType>
//let obj11 = new Collection<myType>( );
//obj11.add({name: 'Steve', age: 21});
