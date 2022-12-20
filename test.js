
// Simple function znd test for addition
let myVariable = 45;

function funAddtion(number1, number2) {    
    return number1 + number2;
}

let resultValue = funAddtion(myVariable, 500)

const expectedTestResult = 545;
if( resultValue == expectedTestResult)
    console.log("Success")
else
    console.log("Test failed")






