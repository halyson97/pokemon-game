export default class Game {
    constructor() {  
        this.up = null;
        this.right = null;
        this.down = null;
        this.left = null;
        this.pokebola = null;
    }  

    getUp() {
        return this.up;
    }

    getDown() {
        return this.down;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    getPokebola() {
        return this.pokebola;
    }

    loadImage(image) {
		return new Promise((resolve, reject) => {
			const newImage = new Image();
			newImage.addEventListener('load', () => {
				resolve(newImage);
			})
			newImage.addEventListener('error', () => {
				reject('Falha ao carregar a imagem');
			})
			newImage.src = image;
		})
	}

    async loadImages() {
        this.up = await this.loadImage('images/up.png');
        this.right = await this.loadImage('images/right.png');
        this.down = await this.loadImage('images/down.png');
        this.left = await this.loadImage('images/left.png');
        this.pokebola = await this.loadImage('images/poke.png');
    
    }
  }
  