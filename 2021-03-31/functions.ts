//Normal function
function print( ):void{
    console.log('Printing...');
}
print( );


//Function expression
let addNumbers = function( num1: number, num2: number ): number {
    return num1 + num2;
}

addNumbers( 1, 2 );

//Arrow function
let multiplyNumbers = ( num1: number, num2: number = 2 ): number => {
    return num1 * num2;
}

multiplyNumbers( 2 ); //We can leave just one parameter because of the default parameter at num2

//We can also use just the arrow in one single line of code

let multiplyNumbersTwo = ( num1: number, num2: number ): number => num1 * num2;

multiplyNumbersTwo( 2, 4 );

//--------------------------------------------------

// Spread operator (Arrays and Objects)
const numbers: number[] = [2, 12, 14, 16];

//Number duplicated using the dynamic type
const numbersDup: number[] = [...numbers];

type myType = {name: string, age: number};

const object: myType = {name: 'Steve', age: 21};
const objectDup: myType = {...object};

function save( obj: myType ) {
    //mutate or modify
    obj.name = 'Tom';
    //Save obj to db
}

//save ( object );
save( {...object} );
//we can also pass a copy right here... there's no need to mutate
//objects everywhere, it can only be in certain moments

// Destructuring Operator (Arrays and Object)
const myHobbiesTwo: string[] = ['baseball', 'cooking'];

//const hobby1 = myHobbiesTwo[0];
//console.log(hobby1);
//const hobby2 = myHobbiesTwo[1];
//console.log(hobby2);

//Now, using destructuring:
const [hobby1, hobby2] = myHobbiesTwo;

const userData2: myType = {name: 'Steve', age: 21};
//const userName = userData2.name;
//const userAge = userData2.age;
const { age: userAge, name: userName} = userData2;

//console.log(userData2.name);

//--------------------------------------------------------

//Template literals (string)

let userName3 = 'Steve';
let greeting = 'Hello' + userName3;
console.log(greeting);

let greeting2 = `Hello ${userName3}, I'm cool!`; //alt Gr + } for ``
console.log(greeting2);

