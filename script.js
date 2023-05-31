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