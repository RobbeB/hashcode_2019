import Photo from "./model/photo";

export const getHorizontalPhotos = (photos) => {
  return photos.filter(photo => photo.orientation === 'H');
}

export const getVerticalPhotos = (photos) => {
  return photos.filter(photo => photo.orientation === 'V');
}

export const sortByAmountOfTags = (photos) => {
  return photos.sort((a, b) => {
    return b.amountOfTags - a.amountOfTags;
  });
}

export const loopPhotos = (photos) => {
  const result = [];
  const item = photos.shift();
  result.push(item);
  while (photos.length > 1) {
    console.log('remaining files', photos.length);
    const optimal = getOptimalMatch(result[result.length - 1], photos) || photos.splice(0, 1);
    result.push(optimal);
  }

  result.push(photos[0]);

  return result;
}

export const getOptimalMatch = (item, arr) => {
  let optimalMatch = null;
  let highestNumberOfMatches = -1;

	for (let photo of arr) {
    let intersection = photo.tags.filter(x => item.tags.includes(x));
  	const amountOfMatchingTags = intersection.length;
    if (amountOfMatchingTags <= photo.tags.length / 2 && amountOfMatchingTags > highestNumberOfMatches) {
      optimalMatch = photo;
      highestNumberOfMatches = amountOfMatchingTags;
    }
    if (amountOfMatchingTags === photo.tags.length / 2) break;
  }

  const index = arr.findIndex(x => x.id === optimalMatch.id);
  if (index > -1) arr.splice(index, 1);

  return optimalMatch;
}

export const matchVerticalPhotos = (photos) => {
  const result = [];
  for (let i = 0; i < photos.length / 2; i++) {
    const joinedId = `${photos[i].id} ${photos[photos.length - 1 - i].id}`;
    const joinedTags = photos[i].tags.concat(photos[photos.length - 1 - i].tags);
    result.push(new Photo(joinedId, 'H', joinedTags.length, joinedTags));
  }
  return result;
}

export const findMatchForVerticalPhoto = (photo, photos) => {
  const currentTags = photo.tags;

}