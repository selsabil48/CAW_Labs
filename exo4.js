const fs = require('fs');

// Vérifiez si le texte est fourni en tant que paramètre
if (process.argv.length !== 3) {
  console.error('Usage: node exo4.js "text to be saved"');
  process.exit(1); // Quittez avec un code d'erreur
}

const textToSave = process.argv[2];
const fileName = 'f.txt';

// Créez un fichier et ajoutez-y du texte
fs.writeFile(fileName, textToSave, (err) => {
  if (err) {
    console.error(`Error creating file: ${err.message}`);
    process.exit(1); // Quittez avec un code d'erreur
  }

  console.log('The file has been saved!');
});
