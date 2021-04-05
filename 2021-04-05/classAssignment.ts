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
