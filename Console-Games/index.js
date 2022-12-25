// GAME HANGMAN 

console.log('WELLCOME TO THIS GAME', "\n")

console.log('HANGMAN', "\n")

// creation du fichier pour stocker les mots

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
rl.on('line', (line) => {
  checkword(line);
}).on('close', () => {
  process.exit(0);
});
let guessWord = '';
let array = [];
let error = 0;
// List des mots 
const listWord = ['Paris', 'Madrid', 'Lyon']
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
    if (guessWord[i].toLowerCase() === letter) {
      array[i] = guessWord[i];
      hose = true;
    } else if (array[i] === undefined) {
      array[i] = '_';
    }
  }

  chose ? chose = false : error++;
  
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
  array.includes('_') ? rl.prompt() : console.log('You have won');
  console.log(array.join(' '));
}

//for getting random things
function getRandom(max) {
  return Math.floor(Math.random() * (max));
}
init();









