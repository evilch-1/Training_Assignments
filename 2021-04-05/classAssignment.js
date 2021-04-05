"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Object literal
var obj3 = {
    name: 'Steve',
    age: 21,
    printAge: function () {
        console.log('Age...');
    }
};
//Class
//Template / Blueprint
//Scope: public, private, protected
//Initialization: constructor
//Extending: extends
var Person = /** @class */ (function () {
    function Person(name, age) {
        //private age: number;
        this.type = 'Person';
        this.name = name;
        this.age = age;
    }
    Person.prototype.printAge = function () {
        console.log('Age...');
    };
    return Person;
}());
//Object
var john = new Person('Steve', 21);
var mark = new Person('Mark', 23);
john.printAge();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.major = '';
        _this.major = major;
        return _this;
    }
    return Student;
}(Person));
var mike = new Student('Mike', 23, 'Maths');
//----------------------------------------------
//Getters and Setters
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = '';
        this._age = 0;
    }
    Object.defineProperty(Person1.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value > 150) {
                console.log('Please give a valid age!');
                return;
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var obj = new Person1();
obj.name = 'Steve'; //<-------- Get this value from textbox
//obj.age = 170; //<----------Get this value from textbox
//console.log(obj);
function saveToDB(obj) {
    //saves to adaptor.....
}
//------------------------------------------------------------------------
//Static
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.calculateCircunference = function (dis) {
        return Helper.PI * dis;
    };
    Helper.prototype.saveToDB = function () {
        console.log('Save to DB....');
    };
    Helper.PI = 3.14;
    return Helper;
}());
var obj4 = Helper.calculateCircunference(12);
console.log(obj4);
var obj5 = new Helper();
console.log(obj5);
//let result4 = obj4.calculateCircunference( 12 );
//----------------------------------------------------------------
//----------------------------------------------------------------
//April 5th
//Abstract class
var Employee = /** @class */ (function () {
    function Employee(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee.prototype.getDetails = function () {
        return "Name: " + this.name + " Id: " + this.id;
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Developer.prototype.getSalary = function () {
        return 7000;
    };
    return Developer;
}(Employee));
var tom = new Developer('Tom', 'EMP002');
var Employee1 = /** @class */ (function () {
    function Employee1(name, id) {
        this.name = name;
        this.id = id;
    }
    Employee1.prototype.getDetails = function () {
        return "Name: " + this.name + " id: " + this.id;
    };
    return Employee1;
}());
var emp1 = new Employee1('Mark', 'EMP004');
//2.
var Encryptor = /** @class */ (function () {
    function Encryptor(data) {
        this.data = data;
    }
    Encryptor.prototype.encrypt = function (data) {
        return data;
    };
    Encryptor.prototype.decrypt = function (data) {
        return data;
    };
    return Encryptor;
}());
//3.
var SymmetricEncryption = /** @class */ (function () {
    function SymmetricEncryption(data) {
        this.data = data;
    }
    SymmetricEncryption.prototype.encrypt = function (data) {
        return data;
    };
    SymmetricEncryption.prototype.decrypt = function (data) {
        return data;
    };
    return SymmetricEncryption;
}());
var AsymmetricEncryption = /** @class */ (function () {
    function AsymmetricEncryption(data) {
        this.data = data;
    }
    AsymmetricEncryption.prototype.encrypt = function (data) {
        return data;
    };
    AsymmetricEncryption.prototype.decrypt = function (data) {
        return data;
    };
    return AsymmetricEncryption;
}());
// Using Symmetric Encryption Class
var encSym = new SymmetricEncryption('This is the data');
var resultSymmetricEnc = encSym.encrypt('Hello');
var decryptMessageSym = encSym.decrypt('JHYUDDTE');
//Using Assymetric Encryption Class
var encAsym = new AsymmetricEncryption('This is the data');
var resultAsymmetricEnc = encAsym.encrypt('Hello Again');
var decryptMessageAsym = encAsym.decrypt('JHYUDDTE EWBCUEW');
