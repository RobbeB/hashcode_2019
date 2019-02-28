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
    const optimal = getOptimalMatch(item, photos);
    result.push(optimal);
  }

  result.push(photos[0]);

  return result;
}

export const getOptimalMatch = (item, arr) => {
  let optimalMatch = null;
  let numberOfMatches = -1;

	arr.forEach((photo) => {
    let intersection = photo.tags.filter(x => item.tags.includes(x));
  	const match = intersection.length;
    if (match < photo.tags.length / 2 + 1 && match > numberOfMatches) {
      optimalMatch = photo;
      numberOfMatches = match;
    }
  })

  const index = arr.findIndex(x => x.id === optimalMatch.id);
  if (index) arr.splice(index, 1);

  return optimalMatch;
}