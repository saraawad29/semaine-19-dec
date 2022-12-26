// GAME HANGMAN 

console.log('WELLCOME TO THIS GAME', "\n")

console.log('HANGMAN', "\n")

// lire du fichier pour stocker les mots

const fsFile = require('fs')
  fsFile.readFile('words.txt', function (err){
    if(err) {
        return console.log(err)
    }
})

//info de joueur a partir de readline
const readline = require('readline'),
  fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What your name ? ', answer => {
  fs.appendFile('game.txt', answer, error => {
    if (error){
        console.log(error)
    rl.close();
    }
    console.log('------------', "\n")
    console.log('Start game',"\n")
    console.log('------------',"\n" )
    })
});
// line: utiliser quand le joureur appuie sur la touches entre pour remttre les infos 
rl.on('line', (line) => {
  checkword(line);
});
// on defini chaque variable
let guessWord = '';
let array = [];
let error = 0;
// List des mots 
const listWord = ['paris', 'madrid', 'lyon']
//tableau 
const errorArray = [
 `
 ╔═══╗                                                       
 |   ║                                                       
     ║                                                       
     ║                                                       
     ║                                                       
███  ║                                                       
═════╩═══            
`,
 `
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
     ║                                                       
     ║                                                       
███  ║                                                       
═════╩═══ 
`,
 `
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
 |   ║                                                       
     ║                                                       
███  ║                                                       
═════╩═══  
`,
 `
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
 |\\  ║                                                       
     ║                                                       
███  ║                                                       
═════╩═══
`,
`
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
/|\\  ║                                                       
     ║                                                       
███  ║                                                       
═════╩═══
`,
  `
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
/|\\  ║                                                       
   \\ ║                                                       
███  ║                                                       
═════╩═══ 
`,
 `
 ╔═══╗                                                       
 |   ║                                                       
 O   ║                                                       
/|\\  ║                                                       
/ \\  ║                                                       
███  ║                                                       
═════╩═══ 
`
];

function init() {
guessWord = listWord[getRandom(getRandom(listWord.length))];
array = Array(guessWord.length);
error = 0;
}
function checkword(letter) {
  let chose;
  for (let i = 0; i < guessWord.length; i++) {
    if (guessWord[i] === letter) {
      array[i] = guessWord[i];
      chose = true;
    } else if (array[i] === undefined) {
      array[i] = '_';
    }
  }

  //chose ? chose = false : error++;
  // fonction defini les erreur, plus de 6 erreurs = perdue
  if (error === 6) {
    console.log(errorArray[error]);
    console.log('Game over');
    console.log('Word is ', guessWord);
    console.log('Start again')
    init();
    return;
  } else {
    console.log(errorArray[error]);
  }
  //on vas determiner si le tableau contient une valeur et renvois true
  array.includes('_') ? rl.prompt() : console.log('You have won');
  console.log(array.join(' '));
}

//fonction pour choisir au hasard 
function getRandom(max) {
  return Math.floor(Math.random() * (max));
}
init();









