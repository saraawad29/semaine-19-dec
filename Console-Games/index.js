console.log('WELLCOME TO THIS GAME', "\n")
console.log('HANGMAN', "\n")
// creation du fichier pour stocker les mots
const fsFile = require('fs')
  fsFile.writeFile('words.txt','words-ressours:', function (err){
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
    })
});
