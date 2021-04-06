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

function echo( data: any): any {
    return data;
}

echo('string');
echo(21);
echo(true);
echo({name: 'Steve', age: 21});

//generic function
function betterEcho<T>( data: T ): T {
    return data;
}

betterEcho<string>('hello');
betterEcho<number>(21);
betterEcho<boolean>(true);
betterEcho<{name: string, age: number}>({name: 'Steve', age: 21});


let myHobbies5: string[] = ['cooking', 'baseball'];
let myHobbies6: Array<string> = ['cooking', 'baseball'];
let myHobbies7: Array<number> = [12, 15];
let myHobbies8: Array<boolean> = [true, false];
let myHobbies9: Array<{}> = [{}, {}];


class Collection<T> {
    add( data: T) {
        console.log( data );
    }
}

let obj10 = new Collection<string>( );
obj10.add( 'hello' );

let obj11 = new Collection<number>( );
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