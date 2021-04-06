// decorators.ts
/*
Author: Edgar Vilchis
Exploring new code concepts with some examples writing
TypeScript Code and reviewing some DECORATORS concepts

Purpose: Use of Decorators, understanding why to use a Decorator,
learning when to use a Decorator

Date of creation: April 6th, 2021
Last modified: April 6th, 2021

*/

// Decorators
function decoratorName( abc: Function ) {
    // encryption here
    console.log('Encrypt from decorator!');
    let data = 'Encrypted data';
    //encrypt data
    abc.prototype.save( );
}

@decoratorName
class DataBase5 {
    data: string;

    constructor( data: string ){
        this.data = data;
    }

    save( data: string ) {
        // database saving here...
        console.log('Save to DB.....', data);
    }
}

