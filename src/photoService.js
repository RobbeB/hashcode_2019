export const getHorizontalPhotos = (photos) => {
  return photos.filter((photo) => photo.orientation === 'H');
};

export const getVerticalPhotos = (photos) => {
  return photos.filter((photo) => photo.orientation === 'V');
};

export const sortByAmountOfTags = (photos) => {
  return photos.sort((a, b) => {
    return b.amountOfTags - a.amountOfTags;
  });
};

export const loopPhotos = (photos) => {
  const result = [];
  const item = photos.shift();
  result.push(item);
  while (photos.length > 1) {
    let optimal = getOptimalMatch(result[result.length - 1], photos);
    if (!optimal) optimal = photos[0];
    result.push(optimal);
  }

  result.push(photos[0]);

  return result;
};

export const getOptimalMatch = (item, arr) => {
  let optimalMatch = null;
  let numberOfMatches = -1;

  for (let photo of arr) {
    let intersection = photo.tags.filter((x) => item.tags.includes(x));
    const match = intersection.length;
    if (match < photo.tags.length / 2 + 1 && match > numberOfMatches) {
      optimalMatch = photo;
      numberOfMatches = match;
      if (match === photo.tags.length / 2) break;
    }
  }

  // arr.forEach((photo) => {
  //   let intersection = photo.tags.filter((x) => item.tags.includes(x));
  //   const match = intersection.length;
  //   if (match < photo.tags.length / 2 + 1 && match > numberOfMatches) {
  //     optimalMatch = photo;
  //     numberOfMatches = match;
  //     if (match === photo.tags.length / 2) return;
  //   }
  // });

  const index = arr.findIndex((x) => x.id === optimalMatch.id);
  if (index > -1) {
    console.log(index);
    arr.splice(index, 1);
  }

  return optimalMatch;
};
