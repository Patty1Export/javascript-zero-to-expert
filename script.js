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