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

//-5- Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots.
// Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".

function numberToWords(num){
    const ones = ['', 'one', 'two', 'three' , 'four' , 'five' , 'six' , 'seven' , 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty' , 'forty' , 'fifty' , 'sixty ' , 'seventy' , 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve' , 'thirtheen' , 'fourteen' , 'fiftheen' , 'sixteen' , 'seventeen', 'eighteen' , 'ninet'];
    if (num < 10) {
        return ones[num];
    } else if (num < 20) {
        return teens [num - 10];
    } else {
        return tens[Math. floor(num / 10)] + '-' + ones[num % 10];
        }
    }
console.log("Exercise 5")
console.log(numberToWords(50));
//-6- Écrivez une fonction qui prend un tableau d'objets et un nom de propriété 
//et renvoie un tableau des valeurs de cette propriété dans chaque objet.

const objectArray = [
    {firestName: "sara", lastName: "awad"},
    {firestName: "sara", lastName: "awad"},
    {firestName: "sara", lastName: "awad"},
    {firestName: "sara", lastName: "awad"},
]
function getPropreValues(objArray , propName) {
    return objArray.map(obj => obj[propName])
}
console.log("Exercise 6")
console.log(getPropreValues(objectArray, 'lastName'));


//-7- Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
let numberArray = [1,2,7,5,8,4,9,6,3];
    function numberDescending(figures){
        figures.sort()
        figures.reverse()   
        return figures;    
}
const descendingOrder = numberDescending(numberArray)
console.log("Exercise 7")
console.log("Is it numbers sorted in descending order?",descendingOrder,"\n")



//-8- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle 
//chaîne avec toutes les voyelles en majuscules.

let sentenceArray = "argent, gens, beau, merci, gentil";
function capitalLettersVowel(sentence){
    return sentence.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());  
}
const resultLettreVowel = capitalLettersVowel(sentenceArray)
console.log("Exercise 8")
console.log(resultLettreVowel, "\n")


//-9- Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
const myString = "je veux dormir";
function getVowels(str) {
    let m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }
  const countResult = getVowels(myString)
  console.log("Exercise 9")
  console.log("This is the number of vowels in this sentence",countResult, "\n")

//-10- Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle 
//chaîne avec toutes les consonnes en majuscules.

let mysentence = "la vie en rose";
function capitalLetters(lettre){
    return lettre.replace(/[bcdfghjklmnpqrstvwxyz]/gi, consonnes => consonnes.toUpperCase());  
}
const resultLettre = capitalLetters(mysentence)
console.log("Exercise 8")
console.log("My sentence is :",resultLettre, "\n")











