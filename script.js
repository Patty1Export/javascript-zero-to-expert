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