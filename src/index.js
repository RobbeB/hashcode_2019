import { processHashcodeFile, writeHashcodeResult } from './fileService';
import { getHorizontalPhotos, getVerticalPhotos, sortByAmountOfTags, loopPhotos, matchVerticalPhotos } from './photoService';

const photos = processHashcodeFile('files/input/d_pet_pictures.txt');

const horizontal = getHorizontalPhotos(photos);
const vertical = getVerticalPhotos(photos);

const sortedVertical = sortByAmountOfTags(vertical);
const newHorizontal = matchVerticalPhotos(sortedVertical);
const allPhotos = horizontal.concat(newHorizontal);
const allPhotosSorted = sortByAmountOfTags(allPhotos);

const result = loopPhotos(allPhotosSorted);
writeHashcodeResult(result, 'd_pet_pictures.txt');