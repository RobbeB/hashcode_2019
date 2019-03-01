const fs = require('fs');
import Photo from './model/photo';

export const writeFile = (filename, content) => {
  fs.writeFile(filename, content, (err) => {
    if (err) throw err;
  });
}

export const readFile = (filename) => fs.readFileSync(filename, 'utf8', (err, data) => {
  if (err) throw err;

  return data;
});


export const processHashcodeFile = (filename) => {
  const fileData = readFile(filename);

  const photos = [];

  const splitFileData = fileData.split('\n');
  const numberOfPhotos = splitFileData.shift();
  const photoData = splitFileData;

  for (let i = 49999; i < 65000; i++ ) {
    const data = photoData[i];
    const splitData = data.split(' ');
    const orientation = splitData.shift();
    const amountOfTags = splitData.shift();
    const tags = splitData;
    photos.push(new Photo(i, orientation, amountOfTags, tags));
  }

  return photos;
}

export const writeHashcodeResult = (photos, filename) => {
  let result = '';
  result = result + `${photos.length}\n`;
  photos.forEach(photo => {
    result = result + `${photo.id}\n`;
  });
  writeFile(`files/output/${filename}`, result);
}