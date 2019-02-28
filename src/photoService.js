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