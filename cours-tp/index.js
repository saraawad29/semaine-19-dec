console.log("Hello world");
/*****
 * 
 * 
 * un commantaire multiligne 
 */
// on dispose de trois mots cles pour declarer des vairiable en JS
// var, let et const

var test = "bonjour";   // indterdi l'utiliser
let test2 = "le";    // l'operateur = est un operteur d'assignation 
const test3 = "monde";

// number

const age = 23;

// variable 

let x;

// Text (string)

const aRandomString = "some Text"

// operations

let addition = 4 + 4;

//booleans

let myBoolean = true;

// objects

let name = { firstName: "sara", lastName: "awad", }

// arrays

// let myArray = ["Banana", "Test", "Application"];

// Array Methodes

let numberOne = 1;
let numberTow = 3;

let sum = numberOne + numberTow;
// numberOne est un parametre ou un argement de la fonction sum 
// entre les accolades se trouve le corps de la fonction, c'est la qu'est 
// stockee la logique de la fonction 
function square(number) {
    return number * number;
}
const number = square(2);
console.log(number);

//ceci est la fonction

//const square = (number) => {
//    return number * number;
//}
//la meme fonction 
// const square = number => number * number
//const number = square(2);
//console.log(number);

// ceci est un tableau 

const myArray = [566652, 5524 , 52555 , 56558 , 445485 , 5696 , 55555 ];

//l'index est la position d'un element dans le tableau
// le premier index est l'index 0
console.log(myArray.length);

// boucle for

for (let index = 0; index <= myArray.length; index++) {
    const arrayContentAtIndex = myArray[index];
    console.log(arrayContentAtIndex);
}
