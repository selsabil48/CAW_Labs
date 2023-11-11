const fs = require('fs');
if (process.argv.length !== 3) {
  console.error('Usage: node ReadFile.js <filename>');
  process.exit(1);  
}
const filePath = process.argv[2];

 
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erreur de lecture du fichier : ${err.message}`);
    process.exit(1);  
  }

   
  console.log(data);
});


