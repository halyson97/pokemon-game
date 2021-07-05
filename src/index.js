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

  async renderGame(path, animation) {
    const pathLength = this.getBiggerDirection(path);

    const { widthItem, widthCanva, centerCanva } = this.getSizesByPath(pathLength);

    const player = new Player(centerCanva);
    const images = new Images();
    await images.loadImages();

    const canvas = new Canvas(images, widthCanva, widthItem);
    canvas.drawCanvas();
    canvas.drawPokebolas();
    canvas.drawImage(player.positionX, player.positionY);

    const game = new Game(player, canvas, images);
    game.init(path, animation);
  }

  getSizesByPath(pathLength) {
    const widthItemSmall = 10;
    const widthItemMedium = 20;
    const widthItemBig = 40;

    const width = pathLength * 2;
    const itemSmall = width * widthItemSmall + (widthItemSmall * 3);
    const itemMedium = width * widthItemMedium + (widthItemMedium * 3);
    const itemBig = width * widthItemBig + (widthItemBig * 3);

    const minWidthScreen = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;

    if (itemBig < minWidthScreen) {
      return { widthItem: widthItemBig, widthCanva: itemBig, centerCanva: itemBig / 2 - widthItemBig / 2 };
    }

    if (itemSmall < minWidthScreen) {
      return { widthItem: widthItemMedium, widthCanva: itemMedium, centerCanva: itemMedium / 2 - widthItemMedium / 2 };
    }

    return { widthItem: widthItemSmall, widthCanva: itemSmall, centerCanva: itemSmall / 2 - widthItemSmall / 2 };
  }

  getBiggerDirection(path) {
    const northDirection = (path.match(/N/g) || []).length;
    const southDirection = (path.match(/S/g) || []).length;
    const estDirection = (path.match(/E/g) || []).length;
    const westDirection = (path.match(/O/g) || []).length;

    return Math.max(northDirection, westDirection, estDirection, southDirection);
  }
}
