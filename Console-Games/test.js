
// // create alphabet ul
//  const buttons = function () {
//      myButtons = document.getElementById('buttons');
//      letters = document.createElement('ul');

//      for (let i = 0; i < alphabet.length; i++) {
//       letters.id = 'alphabet';    
//       myButtons.appendChild(letters);
//       letters.appendChild(list);
//     }
//     console.log(alphabet)
//   }


// function printGame(yes){
//     if (yes === 0 ) {
//         console.log(hangmanStates[0])
//     }
//     else if (yes !== 0 ) {
//         console.log(error1)
//     }
// }
// while game is running
// number of errors equals zero err = 0
// if an erro has occured err+=1
// console.log(hangmanStates[errorNumber])
// let errorNumber = 0;
// errorNumber += 1;
// console.log(hangmanStates[errorNumber])
// l'affichage 
// const errorArray = {
//     'error0': `
//  ╔═══╗                                                       
//  |   ║                                                       
//      ║                                                       
//      ║                                                       
//      ║                                                       
// ███  ║                                                       
// ═════╩═══            
// `,
//     'error1': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
//      ║                                                       
//      ║                                                       
// ███  ║                                                       
// ═════╩═══ 
// `,
//     'error2': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
//  |   ║                                                       
//      ║                                                       
// ███  ║                                                       
// ═════╩═══  
// `,
//     'error3': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
//  |\\  ║                                                       
//      ║                                                       
// ███  ║                                                       
// ═════╩═══
// `,
//     'error4': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
// /|\\  ║                                                       
//      ║                                                       
// ███  ║                                                       
// ═════╩═══
// `,
//     'error5': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
// /|\\  ║                                                       
//   \\  ║                                                       
// ███  ║                                                       
// ═════╩═══ 
// `,
//     'error6': `
//  ╔═══╗                                                       
//  |   ║                                                       
//  O   ║                                                       
// /|\\  ║                                                       
// / \\  ║                                                       
// ███  ║                                                       
// ═════╩═══ 
// `
// };

// function printGame(error) {
//     const errorName = "error" + error;
//     console.log(errorArray[errorName]);
    
// }

// console.log(printGame(i))



// const guess = `Guess _ _ _ _ _ _ `;
// console.log(guess)



// function chooseLettre(choose) {
//     if ( m === m ) {
//     const chooseLettre = `Guess m _ _ _ _ _`;
//     console.log(chooseLettre)
//     }
// }

// let answer = '';
// let maxWrong = 6;
// let mistakes = 0;
// let guessed = [];
// let wordStatus = null;
// function guessedWord() {
//     wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
//   }
//   guessedWord();
//   function handleGuess(chosenLetter) {
//     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//     document.getElementById(chosenLetter).setAttribute('disabled', true);
  
//     if (answer.indexOf(chosenLetter) >= 0) {
//       guessedWord();
//     } else if (answer.indexOf(chosenLetter) === -1) {
//       mistakes++;
//       updateMistakes();
//       checkIfGameLost();
//       updateHangmanPicture();
//     }
//   }
//   function checkIfGameWon() {
//     if (wordStatus === answer) {
//     }
//   }

// const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];