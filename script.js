/*
const markWeightsData1 = 78;
const markHeightsData1 = 1.69;

const johnWeightsData1 = 92;
const johnHeightsData1 = 1.95;


const markWeightsData2 = 95;
const markHeightsData2 = 1.88;

const johnWeightsData2 = 85;
const johnHeightsData2 = 1.76;

//For Mark Test Data 1
const bmiMarkTest1 = markWeightsData1 / markHeightsData1 ** 2;
console.log(bmiMarkTest1);

//For John Test Data 1
const bmiJohnTest1 = johnWeightsData1 / johnHeightsData1 ** 2;
console.log(bmiJohnTest1);

//For Mark Test Data 2
const bmiMarkTest2 = markWeightsData2 / markHeightsData2 ** 2;
console.log(bmiMarkTest2);

//For John Test Data 2
const bmiJohnTest2 = johnWeightsData2 / johnHeightsData2 ** 2;
console.log(bmiJohnTest2);

const markHigherBMI = true;

// Mark has a Higher BMI than John
console.log(markHigherBMI == bmiMarkTest1 > bmiJohnTest1) // True
// Mark has a Lower BMI than John
console.log(markHigherBMI == bmiMarkTest2 > bmiJohnTest2) // False

*/

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);


const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`)

//Multi line String
console.log('String with \n\
     multiple \n\
lines');

console.log(`String 
multiple
lines`);

*/

/*
const age = 19;
// const isOldEnough = age >= 18;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :`);
}

let century;
const birthYear = 2012;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)
*/

/*
const markWeightsData1 = 78;
const markHeightsData1 = 1.69;

const johnWeightsData1 = 92;
const johnHeightsData1 = 1.95;


const markWeightsData2 = 95;
const markHeightsData2 = 1.88;

const johnWeightsData2 = 85;
const johnHeightsData2 = 1.76;

//For Mark Test Data 1
const bmiMarkTest1 = markWeightsData1 / markHeightsData1 ** 2;
console.log(bmiMarkTest1);

//For John Test Data 1
const bmiJohnTest1 = johnWeightsData1 / johnHeightsData1 ** 2;
console.log(bmiJohnTest1);

//For Mark Test Data 2
const bmiMarkTest2 = markWeightsData2 / markHeightsData2 ** 2;
console.log(bmiMarkTest2);

//For John Test Data 2
const bmiJohnTest2 = johnWeightsData2 / johnHeightsData2 ** 2;
console.log(bmiJohnTest2);

const markHigherBMI = true;

// Mark has a Higher BMI than John
console.log(markHigherBMI == bmiMarkTest1 > bmiJohnTest1) // True
// Mark has a Lower BMI than John
console.log(markHigherBMI == bmiMarkTest2 > bmiJohnTest2) // False


if (bmiMarkTest1 > bmiJohnTest1) {
    console.log(`Marks BMI (${Math.round(bmiMarkTest1)}) is higher than John's (${Math.round(bmiJohnTest1)})`)
} else {
    console.log(`John BMI (${Math.round(bmiJohnTest1)}) is higher than John's (${Math.round(bmiMarkTest1)})`)
}

if (bmiMarkTest1 > bmiJohnTest1) {
   console.log("Marks BMI is higher than John's ")
} else {
    console.log(`John BMI is higher than John\'s`)
}


if (bmiMarkTest2 > bmiJohnTest2) {
    console.log(`Marks BMI (${Math.round(bmiMarkTest2)}) is higher than John's (${Math.round(bmiJohnTest2)})`)
} else {
    console.log(`John BMI (${Math.round(bmiJohnTest2)}) is higher than John's (${Math.round(bmiMarkTest2)})`)
}

if (bmiMarkTest2 > bmiJohnTest2) {
   console.log("Marks BMI is higher than John's ")
} else {
    console.log(`John BMI is higher than John's`)
}

*/
/*
//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18)


console.log(Number('Jonas'));
console.log(typeof NaN)


console.log(String(23), 23);



//type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3)
console.log('23' * '2')
console.log('23' / '2')



let n  = '1' + 1 ;
n = n - 1;
console.log(n);

let s = 2 + 3 + 4 + '5';
console.log(s)

let f = '10' + '4' + '3' - 2 + '5';
console.log(f)
*/

/*
// 5 falsy value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!")
}


let height; //falsy
if(height) {
    console.log("Yay! height is defined")
} else {
    console.log('Height is undefined')
}

*/


/*

// 5 falsy value: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;
if(money) {
    console.log("Don't spend it all");
} else {
    console.log("You should get a job!")
}


let height; //falsy
if(height) {
    console.log("Yay! height is defined")
} else {
    console.log('Height is undefined')
}

*/

/*
const age = '18';
if (age === 18) //both sides are exactly the same 
{
    console.log("You just became an adult(strict)")
}
if (age == 18) //both sides are exactly the same 
{
    console.log("You just became an adult(loose)")
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite)


if(favourite === 23) { // '23' === 23 -> false
    console.log('Cool! 23 is an amazing number')
} else if(favourite === 7) {
    console.log('7 is also a cool number')
} else if( favourite === 9) {
    console.log('9 is also a cool number')
} else {
    console.log(' Number is not 23 or 7 or 9')
}


if(favourite !== 23) {
    console.log('Why not 23')
}

*/
/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive....')
// }

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('Someone else should drive....')
}
*/



/*

// Coding Challenge Number 3

const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
console.log(dolphins, koalas)


if (dolphins > koalas ) {
    console.log('Dolphins has greater average scores than koalas')
} else {
    console.log('Koalas has greater average scores than dolphins')
}

// Bonus 1
const dolphinsBonus1 = (97 + 112 + 101) / 3;
const koalasBonus1 = (109 + 95 + 123 )/ 3;
console.log(dolphinsBonus1, koalasBonus1)

if( 100 < dolphinsBonus1){
    console.log('Dolphins has greater average scores than koalas')
} else if( 100 < koalasBonus1) {
    console.log('Koalas has greater average scores than dolphines')
}


// Bonus 2
const dolphinsBonus2 = (97 + 112 + 101) / 3;
const koalasBonus2 = (109 + 95 + 106 ) / 3;
console.log(dolphinsBonus2 , koalasBonus2)

if( 100 >= dolphinsBonus2){
    console.log('Dolphins has greater average scores than koalas')
} else if( 100 >= koalasBonus2) {
    console.log('Koalas has greater average scores than dolphines')
} else if( dolphinsBonus2 === koalasBonus2 ) {
    console.log('Koalas is equal to dolphine')
}

*/

//Coding Challenge Number 3 Solution 

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas)

// if(scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆')
// } else if( scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆')
// } else if( scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy')
// }

//Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// console.log(scoreDolphins, scoreKoalas)

// if(scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy 🏆')
// } else if( scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy 🏆')
// } else if( scoreDolphins === scoreKoalas) {
//     console.log('Both win the trophy')
// }

/*
//Bonus 2

const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas)

if(scoreDolphins > scoreKoalas  && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆')
} else if( scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆')
} else if( scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy')
} else {
    console.log('No one wins the trophy')
}

*/

const day = 'friday'

switch(day){
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meet up');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write Code Example');
        break;
    case 'friday':
        console.log('Record Videos')
        break;
    case 'saturday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!')

}


if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meet up');
} else if(day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write Code Example');
} else if(day === 'friday') {
    console.log('Record Videos')
} else if (day === 'saturday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!')
}















