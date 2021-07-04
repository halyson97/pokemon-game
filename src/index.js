import Canvas from './canvas';
import Player from './player';
import Images from './images';
import Game from './game';

export default class Pokemon {
	constructor() {  

		this.imagesToCanvas = null;

		this.init()
	}

	init = async () => {
		console.log('init')

		const player = new Player();
		const images = new Images();
		await images.loadImages();
		
		const canvas = new Canvas(images);

		canvas.drawCanvas();
		
		await canvas.drawPokebolas();

		canvas.drawImage(player.positionX, player.positionY)

		const game = new Game(player, canvas, images);

		game.init();

	}

}
	