// ecrire une fonction qui prend un tableau de nombre en parametre et qui
// retourne la plus grend nombre du talbeau 

/*
    let largest = 0;

    for (let i= 0; i <= largest.length; i++){
        if (array[i] > largest) {
            largest = array[i]
        }
    }
    console.log(largest);

*/

// correction
// @param {*}numbers  :  an array of number
const someOtherArray = [4, 5,85, 8, 9] 
function getMaxNumber(numbers) {
    let max = numbers[0];
        for (let i = 0; i < numbers.length; i++)
        if (numbers[i] > max){
            max = numbers[i];
        }
    return max;
}
const result = getMaxNumber(someOtherArray)
console.log(result)