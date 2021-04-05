// class.ts
/*
Author: Edgar Vilchis
Exploring new code concepts with some examples writing
TypeScript Code and reviewing some OOP concepts

Purpose: Use of classes, how do they work, how to
use them, how to build them

Date of creation: March 31st, 2021
Last modified: April 5th, 2021

NOTES from April 5th: This file was already created before,
but we continue reviewing some concepts from OOP and classes,
such as abstract class and Interfaces.

Assignment April 5th: Continue practicing Interfaces and classes
trying to build an Interface for an encrypter/decrypter class.

*/

//Object literal
let obj3 = {
    name: 'Steve', 
    age: 21, 
    printAge: function(){
        console.log('Age...');
    }
};

//Class
//Template / Blueprint
//Scope: public, private, protected
//Initialization: constructor
//Extending: extends

class Person {

    public name: String;
    public age: number;
    //private age: number;
    protected type: string = 'Person';

    constructor( name: string, age: number ){
        this.name = name;
        this.age = age;
    }


    public printAge( ) {
        console.log('Age...')
    }
}

//Object
const john = new Person( 'Steve', 21 );
const mark = new Person( 'Mark', 23);
john.printAge();

class Student extends Person {
    public major: string = '';

    constructor( name: string, age: number, major: string) {
        super( name, age);
        this.major = major;
    }
}

const mike = new Student( 'Mike', 23, 'Maths');

//----------------------------------------------

//Getters and Setters

class Person1 {
    public name: string = '';
    private _age: number = 0;

    get age( ) {
        return this._age;
    }

    set age( value: number) {
        if ( value > 150 ){
            console.log('Please give a valid age!');
            return;
        }
        this._age = value;
    }
}

let obj = new Person1();
obj.name = 'Steve'; //<-------- Get this value from textbox
//obj.age = 170; //<----------Get this value from textbox
//console.log(obj);

function saveToDB ( obj: Person1 ) {
    //saves to adaptor.....
}

//------------------------------------------------------------------------

//Static
class Helper {
    static PI: number = 3.14;

    static calculateCircunference( dis: number){
        return Helper.PI * dis;
    }

    saveToDB( ){
        console.log('Save to DB....');
    }
}

let obj4 = Helper.calculateCircunference( 12 );
console.log( obj4 );

let obj5 = new Helper( );
console.log( obj5 );
//let result4 = obj4.calculateCircunference( 12 );

//----------------------------------------------------------------
//----------------------------------------------------------------

//April 5th

//Abstract class

abstract class Employee {
    name: string;
    id: string;

    constructor( name: string, id: string ){
        this.name = name;
        this.id = id;
    }

    abstract getSalary( ): number;

    getDetails( ): string {
        return `Name: ${this.name} Id: ${this.id}`;
    }
}

class Developer extends Employee {

    getSalary( ) {
        return 7000;
    }
}

let tom = new Developer( 'Tom', 'EMP002' );

//----------------------------------------------------------------
//Interface

interface IEmployee1 {
    name: string;
    id: string;
    getDetails( ): string;
}

class Employee1 implements IEmployee1 {
    name: string;
    id: string;

    constructor( name: string, id: string) {
        this.name = name;
        this.id = id;
    }

    getDetails( ): string {
        return `Name: ${this.name} id: ${this.id}`;

    }
}

let emp1 = new Employee1( 'Mark', 'EMP004');

interface IEmployeeNew extends IEmployee1 {
    age: number;
}
