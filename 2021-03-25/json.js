/*

Author: Edgar Vilchis
Exploring new code concepts with some examples writing
JavaScript Code (JSON files)

Purpose: Having a look on how does a JSON file work as information
allocated in use for the backend of our program.
Also, its type of value needs to be parsed so the data is processed
and received from the backend.

Date of creation: March 25th, 2021
Last modified: March 25th, 2021

*/

let employee = {
    name: 'Steve',
    age: 23,
    code: 'EMP0023',
    departments: ['Admin', 'HR']
};

let json = JSON.stringify( employee );
console.log(json);

//Client side - processing data (json format) received from backend
let backendjson = '{ "name": "Tom", "age": 31, "code": "EMP0031", "departments": ["Admin", "HR"] }';

let backendemployee = JSON.parse(backendjson);
console.log(backendemployee);

//Adding aditional objects to practice

//First simple JSON example declared with its own declaration of student
let student = {
    name: 'Edgar',
    age: 24,
    code: 'AES35701',
    departments: ['Web dev', 'Mobile dev']
};

//Now, let's call it declaring the stringify modifier so it can be parsed
//in our browser
let jsonStudent = JSON.stringify( student );
//Finally, print it in console
console.log( jsonStudent );

//------------------
//Another practice: Converting a JSON Text to a JavaScript Object

let backendInfo = '{ "name": "Alex", "age": 26, "code": "AES35702", "departments": ["Arq dev", "DBA"] }';

//To parse it and then display it in our browser:
let displayBackendInfo = JSON.parse(backendInfo);
console.log(displayBackendInfo);