class Photo {
  constructor(id, orientation, amountOfTags, tags) {
    this.id = id;
    this.orientation = orientation;
    this.tags = tags;
    this.amountOfTags = amountOfTags;
  }

  toPrintFormat = () => {
    return `id: ${this.id}, orientation: ${this.orientation}, amount of tags: ${this.amountOfTags}, tags: ${this.tags}`;
  }
}

export default Photo;
