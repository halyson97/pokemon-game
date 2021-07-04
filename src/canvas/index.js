export default class Canvas {
	constructor(images) {  
		this.width = 500;
		this.height = 500;
		this.canva = document.querySelector('canvas');
		this.context = this.canva.getContext('2d');
		this.widthItem = 20;

		this.images = images;
	}

	drawCanvas = () => {
		this.canva.width = this.width;
		this.canva.height = this.height;
	}

	drawImage = (x, y, image = this.images.getUp()) => {
		this.context.drawImage(image, x, y, this.widthItem, this.widthItem);
	}

	clear = (x, y) => {
		this.context.clearRect(x, y, 20, 20);
	}

}
