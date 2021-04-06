// class.ts
/*
Author: Edgar Vilchis
Exploring new code concepts with some examples writing
TypeScript Code and reviewing some OOP concepts

Purpose: Use of classes, how do they work, how to
use them, how to build them

Date of creation: March 31st, 2021
Last modified: April 6th, 2021

NOTES from April 6th: Already done working in this file
Added complete to Github on date April 6th

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
//Interface in classes

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

//------------------------------------------------------------
//Assignment for April 5th, 2021
//Edgar Vilchis

//1. Create an interface for encryptor
//2. Create an Encryptor class
//3. Create concrete/specialized class

//1.
interface IEncrypt1 {
    data: string;
    encrypt( data: string ): string;
    decrypt( data: string ): string;
}

//2.
class Encryptor implements IEncrypt1 {
    data: string;

    constructor ( data: string) {
        this.data = data;
    }

    encrypt ( data: string ): string {
        return data;
    }

    decrypt( data: string ): string {
        return data;
    }
}

//3.
class SymmetricEncryption implements IEncrypt1 {
    data: string;

    constructor( data: string) {
        this.data = data;
    }

    encrypt ( data: string ): string {
        return data;
    }

    decrypt( data: string ): string {
        return data;
    }

}

class AsymmetricEncryption implements IEncrypt1 {
    data: string;

    constructor( data: string) {
        this.data = data;
    }

    encrypt ( data: string ): string {
        return data;
    }

    decrypt( data: string ): string {
        return data;
    }
}

// Using Symmetric Encryption Class
let encSym = new SymmetricEncryption( 'This is the data');
let resultSymmetricEnc = encSym.encrypt('Hello');
let decryptMessageSym = encSym.decrypt ( 'JHYUDDTE' );

//Using Assymetric Encryption Class
let encAsym = new AsymmetricEncryption( 'This is the data' );
let resultAsymmetricEnc = encAsym.encrypt('Hello Again');
let decryptMessageAsym = encAsym.decrypt ( 'JHYUDDTE EWBCUEW' );

//----------------------------------------------------------------
//----------------------------------------------------------------

//April 6th

//To see more clearly how Interfaces are MORE powerful
//than what they seem

//Encryption cluster
interface IEncryption {
    encrypt( data: string): string;
    decrypt( data: string): string;
}

class SymmetricEncryption1 implements IEncryption {
    encrypt( data: string): string {
        return `xyz${data}`;
    }
    decrypt( data: string ): string {
        return data.slice(3);
    }
}

class AsymmetricEncryption1 implements IEncryption {
    encrypt( data: string): string {
        return `abc${data}`;
    }
    decrypt( data: string ): string {
        return data.slice(3);
    }
}

//Persistance cluster
class Oracle {
    _encObj: IEncryption;
    
    constructor( encObj: IEncryption ) {
        this._encObj = encObj;
    }

    save( data: string ): void {
        let encryptedData = this._encObj.encrypt(data);
        console.log('Oracle Data: ', encryptedData);
        //save 'encryptedData' to DB
    }
}

// use Oracle to save data
// TODO: Read a config file & get what encryption is used
let dbObj = new Oracle(new AsymmetricEncryption1());
dbObj.save( 'Hello' );

//------------------------------------------------------

//Interface in functions
interface IPerson {
    name: string;
    age: number;
}

function greet( xyz: IPerson ) {
    console.log( `Hello ${xyz.name}` );
}

//usage
let person = {
    name: 'Steve', //change it to name2 and it wont work becuase of the interface
    age: 21 //Same thing with age
}
greet ( person );

//-------------------------------------------------------------
