/*
'use strict';

let hasDriversLicense = false;
const passTest = true;


if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 534;

*/
/*

function logger() {
    console.log('My name is Jonas')
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);

*/
/*
//Function Declaration
// can be call before they are defined in the code
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);


//Function is a value

// Function Expression
// cannot call before they are defined in the code
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah
}

const age2 = calcAge2(1992);

console.log(age1, age2);
*/



/*
// Arrow Function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

 const yearsUntilRequirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
     return `${firstName}  retires in ${retirement} years`
 }

 console.log(yearsUntilRequirement(1991 , 'Jonas'))
 console.log(yearsUntilRequirement(1980 , 'Bob'))
*/
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }





/*

const cutPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function(apples, oranges) {
    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
    return juice
}

console.log(fruitProcessor(2, 3));

 */

const calcAge = function(birthYeah){
    return 2037 = birthYeah;
}

const yearsUntilRequirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
     return `${firstName}  retires in ${retirement} years`
 }

//Function Declaration
 function calcAge(birthYear) {
    return 2037 - birthYear;
 }

//Function Expression
 const calcAge = function (birthYear) {
    return 2037 - birthYear;
 }


 //Arrow Function
 const calcAge = birthYear => 2037 - birthYear;



 function calcAge(birthYear, firstName) {
    const age = 2037 - birthYear;
    console.log(`${firstName} is ${age} years old`);
    return age;
 }


 const age = calcAge(1991, 'Jonas');