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
/*
const calcAge = function(birthYeah){
    return 2037 - birthYeah;
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
*/

/*

// Coding Challenge Number 1

const calcAverage = function(a, b, c) {
    return (a + b + c) / 3;
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner =  function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas} )`);
        return;
    } else if (avgKoalas >=2 * avgDolphins){
       console.log(`Koalas wins ( ${avgKoalas} vs ${avgDolphins} )`)
    } else {
        console.log('No one wins')
    }
}


// checkWinner(44, 23, 71);
// checkWinner(65, 54, 49);


checkWinner(scoreDolphins, scoreKoalas);
 scoreDolphins = calcAverage(85, 54, 41);
 scoreKoalas = calcAverage(23, 34, 27);

 
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'


const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0]);
console.log(friends[2]);


console.log(friends.length)
console.log(friends[friends.length - 1]);


friends[2] = 'Jay';
console.log(friends);
//friends =['Bob', 'Alice', 2037 - 1991, 'teacher', friends];

const firstName = 'Jonas'
const jonas = [firstName , 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}


const years = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages)
*/

/*
const friends = ['Michael', 'Steven', 'Peter']


// add elements
const newLength = friends.push('jay'); //add the value in the array
console.log(friends)
console.log(newLength)

friends.unshift('john');
console.log(friends);


// remove elements
friends.pop()
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift(); //First
console.log(friends)


console.log(friends.indexOf('Steven'))  //find index
console.log(friends.indexOf('Bob'))  //find index


friends.push(23)

console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))


if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}

*/


/*
const calcTip = function (bill, tip) {
    return bill + tip;
}


const bills = [125,555,44];
const tip = [40,20,10];


const tip1 = calcTip(bills[0], tip[0]);
const tip2 = calcTip(bills[1], tip[1]);
const tip3 = calcTip(bills[bills.length - 1], tip[tip.length - 1]);
console.log(tip1, tip2, tip3);

const total = [ calcTip(bills[0], tip[0]), calcTip(bills[1], tip[1]), calcTip(bills[bills.length - 1], tip[tip.length - 1])];
console.log(total)

*/


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 = 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}









