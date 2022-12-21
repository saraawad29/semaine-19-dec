console.log('WELLCOME TO THIS GAME', "\n")
console.log('HANGMAN', "\n")
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
    })
});