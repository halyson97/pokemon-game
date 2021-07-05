export default class Canvas {
  constructor(images, widthCanva, widthItem) {
    this.width = widthCanva;
    this.height = widthCanva;
    this.canva = document.querySelector('canvas');
    this.context = this.canva.getContext('2d');
    this.widthItem = widthItem;

    this.images = images;
  }

  drawCanvas() {
    this.canva.width = this.width;
    this.canva.height = this.height;
  }

  drawImage(x, y, image = this.images.getUp()) {
    this.clear(x, y);
    this.context.drawImage(image, x, y, this.widthItem, this.widthItem);
  }

  clear(x, y) {
    this.context.clearRect(x, y, this.widthItem, this.widthItem);
  }

  drawPokebolas() {
    for (let index = 0; index <= this.width; index += this.widthItem) {
      for (let index2 = 0; index2 <= this.height; index2 += this.widthItem) {
        this.drawImage(index, index2, this.images.getPokebola());
      }
    }
  }

  isInsideCanvas(x, y) {
    if (x < 0 || y < 0) {
      return false;
    }

    if ((x + this.widthItem) > this.width || (y + this.widthItem) > this.height) {
      return false;
    }

    return true;
  }
}
