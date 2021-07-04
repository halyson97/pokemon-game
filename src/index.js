import Canvas from './canvas';

export default class Pokemon {
	constructor() {  

		this.width = 20;
		this.player = [250, 250];
		this.pokemonCaptureds = [this.player];
		this.imagesToCanvas = null;

		this.init()
	}

	setPlayer = (player) => {
		this.player = player;
	}

	loadImage = (image) => {
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

	loadImagesToCanvas = async () => {

		const images = {
			N: await this.loadImage('images/N.png'),
			E: await this.loadImage('images/E.png'),
			S: await this.loadImage('images/S.png'),
			O: await this.loadImage('images/O.png'),
			pokebola: await this.loadImage('images/pokebola.png'),
		}

		this.imagesToCanvas = images;
	}

	init = async () => {
		console.log('init')

		const canvas = new Canvas();

		canvas.drawCanvas();

		await this.loadImagesToCanvas();

		canvas.drawImage(this.imagesToCanvas.N, this.player[0], this.player[1])

	}

}
	