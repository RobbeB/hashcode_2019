import { processHashcodeFile } from './fileService';
import { getHorizontalPhotos, getVerticalPhotos, sortByAmountOfTags } from './photoService';

const photos = processHashcodeFile('files/input/b_lovely_landscapes.txt');

const horizontal = getHorizontalPhotos(photos);
const vertical = getVerticalPhotos(photos);

sortByAmountOfTags(horizontal).forEach(photo => console.log(photo.toPrintFormat()));

