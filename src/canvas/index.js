export default class Canvas {
    constructor() {  

      this.width = 500;
      this.height = 500;
      this.canva = document.querySelector('canvas');
      this.context = this.canva.getContext('2d');
      this.widthItem = 20;
    }
  
    drawCanvas = () => {
        this.canva.width = this.width;
        this.canva.height = this.height;
    }

    drawImage = (imagem, x, y) => {
        this.context.drawImage(imagem, x, y, this.widthItem, this.widthItem);
    }
  
  }
  