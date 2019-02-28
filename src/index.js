import { processHashcodeFile } from './fileService';
import { getHorizontalPhotos, getVerticalPhotos, sortByAmountOfTags, loopPhotos } from './photoService';

const photos = processHashcodeFile('files/input/b_lovely_landscapes.txt');

const horizontal = getHorizontalPhotos(photos);
const vertical = getVerticalPhotos(photos);

const sorted = sortByAmountOfTags(horizontal);


const result = loopPhotos(sorted);

result.forEach((item) => console.log(item.toPrintFormat()));