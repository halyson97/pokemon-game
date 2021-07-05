import Canvas from './canvas';
import Player from './player';
import Images from './images';
import Game from './game';
import Form from './form';

export default class Pokemon {
  constructor() {
    this.imagesToCanvas = null;

    this.renderGame = this.renderGame.bind(this);

    this.init();
  }

  init() {
    const form = new Form(this.renderGame);
    form.init();
  }

  async renderGame(path) {
    const { widthItem, widthCanva, centerCanva } = this.getSizesByPath(path);

    console.log(widthItem, widthCanva, centerCanva);

    const player = new Player(centerCanva);
    const images = new Images();
    await images.loadImages();

    const canvas = new Canvas(images, widthCanva, widthItem);
    canvas.drawCanvas();
    canvas.drawPokebolas();
    canvas.drawImage(player.positionX, player.positionY);

    const game = new Game(player, canvas, images);
    game.init(path);
  }

  getSizesByPath(path) {
    const widthItemSmall = 10;
    const widthItemMedium = 20;
    const widthItemBig = 40;

    const width = path.length * 2;
    const itemSmall = width * widthItemSmall + widthItemSmall + widthItemSmall;
    const itemMedium = width * widthItemMedium + widthItemMedium + widthItemMedium;
    const itemBig = width * widthItemBig + widthItemBig + widthItemBig;

    const minWidthScreen = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    if (itemBig < minWidthScreen) {
      return { widthItem: widthItemBig, widthCanva: itemBig, centerCanva: itemBig / 2 };
    }

    if (itemSmall < minWidthScreen) {
      return { widthItem: widthItemMedium, widthCanva: itemMedium, centerCanva: itemMedium / 2 };
    }

    return { widthItem: widthItemSmall, widthCanva: itemSmall, centerCanva: itemSmall / 2 };
  }
}
