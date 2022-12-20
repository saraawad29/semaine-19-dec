// 1-Écrivez un programme Node.js qui lit un fichier et imprime son contenu dans la console.

const fs = require('fs');

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err)
        return
    }
    console.log(data)
})


// 2-Écrivez un programme Node.js qui lit un fichier, modifie son contenu et réécrit le contenu modifié dans le fichier.

const edit = require('fs');

edit.writeFile('nouveauFichier.txt', 'Mon nouveau contenu', function (err) {   
    if (err) throw err;   
    console.log('Fichier mis à jour !',edit);
})

// 3-Écrivez un programme Node.js qui utilise le module http pour créer un serveur simple qui sert un fichier statique.



// 4-Écrivez un programme Node.js qui utilise le module fs pour lister les fichiers d'un répertoire.


// 5-Écrivez un programme Node.js qui utilise le module fs pour créer un nouveau fichier et y écrire des données.

const fsCreateFile = require('fs')
fsCreateFile.writeFile('nouveauFichierTest.txt', "hey", function (err){
    if(err) {
        return console.log(err)
    }
    console.log('Fichier créé')
})
fs.writeFileSync('nouveauFichierTest-sync', 'hey')

// 6-Écrivez un programme Node.js qui utilise le module os pour obtenir le répertoire personnel de l'utilisateur actuel.

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("HomeDirectory" + os.homedir());

// 7-Écrivez un programme Node.js qui utilise le module child_process pour exécuter un programme en ligne de commande.



// 8-Écrivez un programme Node.js qui utilise le module path pour manipuler les chemins de fichiers.
var path = require("path");
console.log('normalization : ' + path.normalize('C:\windows\system32\cmd.exe..'));




// 9-Écrivez un programme Node.js qui utilise le module querystring pour analyser une chaîne de requête URL.
const http = require('http');
const url = require('url');
const server = http.createServer(function (request, response) { // Configurez le serveur HTTP pour répondre avec Hello World à toutes les requêtes.
    const queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});

  if (queryData.name) {
    response.end('Hello ' + queryData.name + '\n');
  } else {
    response.end("Hello World\n");
  }
});
server.listen(8000);

// 10-Écrivez un programme Node.js qui utilise le module events pour créer un émetteur d'événements personnalisé.