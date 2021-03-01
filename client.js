const verbose = true;
/// declare a variable
let something;
// initialize a variable
let somethingElse = 'thingy';

let num0 = 47;
if( verbose ) console.log( 'num0:', num0 );
// increment (add 1)
num0++; // 48
if( verbose ) console.log( 'num0:', num0 );
// decrement (sub 1)
num0--; // 47
if( verbose ) console.log( 'num0:', num0 );
// add a value to existing 
num0 += 3.14159; // 50.14159
if( verbose ) console.log( 'num0:', num0 );
// sub a value to existing 
num0 -= 3.14159; // 47
if( verbose ) console.log( 'num0:', num0 );
// equals itself * the other number
num0 *= 2; // 94
if( verbose ) console.log( 'num0:', num0 );
// equals itself * the other number
num0 /= 3; // 31.33333
if( verbose ) console.log( 'num0:', num0 );

function addToNum0( thingToAdd ){
    return num0 += thingToAdd;
}

// conditional edge cases
let test = true;
let tester = false;

function isTheTruth( thingToCheck ){
    if( thingToCheck ){
        return 'is the truth';
    }
    else{
        return 'is a lie';
    }
} // end isTheTruth

// variable scope: where does a variable exist?
// variables only exist within the code block where they are defined
// global variables are declared outside of all code blocks and therefore are available to the entire script

// loops 
// basic for syntax
// for( let i=0; i< ARRAYNAME.length; i++ ){
//     // logic in here, use "i" as index (incrementor)
//  ARRAYNAME[ i ] // each item
// }

let names = [ 'Dev', 'Abdirahman', 'Alex', 'Anthony', 'Ben' ];
// loop through the array and display all names:
for( let i=0; i<names.length; i++ ){
    const thisName = names[i];
    if( verbose ) console.log( thisName );
} // end for

let stringNumber = '42';

function removeSpaces( sentence ){
    let returnString = '';
    // loop through the characters of a string
    for( let i=0; i<sentence.length; i++ ){
        if( verbose ) console.log( sentence.charAt( i ) );
        // if there is a space remove it
        if( sentence.charAt( i ) != ' ' ){
            // not a space, add to returnString
            returnString += sentence.charAt( i );
        } 
    } // end for
    // return the string without spaces
    return returnString;
} // end removeSpaces

// conditionals
// difference between == and ===
function areTheseTheSame( thing1, thing2 ){
    if( thing1 == thing2 ){
        console.log( 'the same with ==' );
    }
    else{
        console.log( 'different with ==' );
    }
    if( thing1 === thing2 ){
        console.log( 'the same with ===' );
    }
    else{
        console.log( 'different with ===' );
    }
} // end isTheTruth

let otherThing = 'wfwrfrw';