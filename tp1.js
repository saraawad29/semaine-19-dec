//-1- Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
let numOne = 5 
let numTwo = 6 
let mySum = sum(numOne, numTwo)

function sum(numOne, numTwo){
    return numOne + numTwo
}
console.log("Exercise 1")
console.log("Sum of 6 and 5 is: ",mySum, "\n")

//-2- Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau
const someOtherArray = [4, 5,85, 8, 9] 
function getMaxNumber(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}
const result = getMaxNumber(someOtherArray)
console.log("Exercise 2")
console.log("Max number is:", result, "\n")


//-3- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle 
//chaîne de caractères dont toutes les voyelles ont été supprimées

const citiesArray = "Paris, Lyon, Nice, Bordeaux, Marseille";
function removeVowel(inputString){
    return inputString.replace(/[aeiou]/gi, '') // replacing vowel by empty string will remove it
}
const changedCityArray = removeVowel(citiesArray)
console.log("Exercise 3")
console.log("\"",citiesArray, "\" looks strange when you remove vowels: \"",changedCityArray, "\"\n")

//-4- Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un
// tableau de chaînes de caractères triées par ordre alphabétique

const wordArray = ["table", "chaise", "peur", "triste"];
function sortAlphabetically(wordArray){
    return wordArray.sort();
}
console.log("Exercise 4")
const sortedArray = sortAlphabetically(wordArray)
console.log("Is it sorted?",sortedArray.toString(),"\n")










