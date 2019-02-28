const fs = require('fs');

export const writeFile = (filename, content) => {
  fs.writeFile(filename, content, (err) => {
    if (err) throw err;
  }); 
}

export const readFile = (filename) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
}